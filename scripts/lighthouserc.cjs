/**
 * Lighthouse CI gate for generated sites (issue #4 / P7.2 S2).
 *
 * Category budgets live in `site.config.yaml` under
 * `performance.lighthouse.categories` (defaults below) — raising a budget in
 * site config tightens CI with no script change. Unknown keys and
 * out-of-range values fail loudly: a budget that silently doesn't bind is
 * worse than a failed run.
 *
 * `yaml` is re-used from Astro's dependency tree — the same zero-new-deps
 * pattern as `vendor/theme/config/preset.js`. Shipped as .cjs because
 * `astro check` skips CommonJS files.
 *
 * Serving contract (see the CI "Stage dist" step): emitted sites build at
 * base `/<repo>/`, so LHCI's built-in static server must serve the PARENT of
 * the site directory. CI stages `dist` at `serve/<repo>/`; this config
 * points `staticDistDir` at `serve/` and autodiscovery audits
 * http://localhost:<port>/<repo>/<page>.html with every absolute asset
 * resolving. Discovery needs explicit depth/limits: LHCI defaults cap at
 * 5 URLs and 2 folder levels, which misses entity and page routes.
 * `/admin/` is the staff-only CMS shell (noindex, pinned third-party
 * script) — not a content page, so it is excluded from the audit.
 */
const { existsSync, readFileSync } = require('node:fs');
const path = require('node:path');
const { parse: parseYaml } = require('yaml');

const DEFAULT_BUDGETS = {
  performance: 0.9,
  accessibility: 0.95,
  'best-practices': 0.9,
  seo: 0.9,
};

const VALID_CATEGORIES = Object.keys(DEFAULT_BUDGETS);

function loadSiteConfig(siteRoot) {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return {};
  return parseYaml(readFileSync(file, 'utf8')) ?? {};
}

/** Budgets from site.config.yaml layered over defaults, shape-validated. */
function readBudgets(siteRoot) {
  const budgets = { ...DEFAULT_BUDGETS };
  const configured = loadSiteConfig(siteRoot)?.performance?.lighthouse?.categories;
  if (configured === undefined) return budgets;
  if (configured === null || typeof configured !== 'object' || Array.isArray(configured)) {
    throw new Error(
      'site.config.yaml: performance.lighthouse.categories must be a map of category -> number',
    );
  }
  for (const [category, value] of Object.entries(configured)) {
    if (!VALID_CATEGORIES.includes(category)) {
      throw new Error(
        `site.config.yaml: unknown Lighthouse category "${category}" (valid: ${VALID_CATEGORIES.join(', ')})`,
      );
    }
    const score = Number(value);
    if (!Number.isFinite(score) || score <= 0 || score > 1) {
      throw new Error(
        `site.config.yaml: Lighthouse budget for "${category}" must be a number in (0, 1], got ${JSON.stringify(value)}`,
      );
    }
    budgets[category] = score;
  }
  return budgets;
}

const siteRoot = path.resolve(__dirname, '..');
const budgets = readBudgets(siteRoot);

/** Only the categories with budgets are asserted; every other audit is off. */
const assertions = {};
for (const [category, minScore] of Object.entries(budgets)) {
  assertions[`categories:${category}`] = ['error', { minScore }];
}

// deploy.base mirrors astro.config's base ("/<repo>/"); "/" covers rooted
// sites. LHCI blocklist entries are exact-URL matched (after port
// normalization), so name the file URL autodiscovery actually produces.
const base = loadSiteConfig(siteRoot)?.deploy?.base ?? '/';
const adminBlocklist = new URL(path.posix.join(String(base), 'admin/index.html'), 'http://localhost').href;

module.exports = {
  ci: {
    collect: {
      staticDistDir: path.join(siteRoot, 'serve'),
      maxAutodiscoverUrls: 0, // audit every discovered page, not just the first 5
      staticDirFileDiscoveryDepth: 5, // default 2 misses entities/<id>/ and deeper routes
      autodiscoverUrlBlocklist: [adminBlocklist],
    },
    assert: {
      assertions,
    },
  },
};
