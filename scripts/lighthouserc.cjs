/**
 * Lighthouse CI gate for generated sites (issue #4 / P7.2 S2).
 *
 * Category budgets live in `site.config.yaml` under
 * `performance.lighthouse.categories` (defaults below) — raising a budget in
 * site config tightens CI with no script change. Unknown keys and
 * out-of-range values fail loudly: a budget that silently doesn't bind is
 * worse than a failed run.
 *
 * Audited pages are a deterministic stratified sample computed from a
 * plain-fs walk of the staged dist (scripts/lighthouse-sampler.cjs, issue
 * #52): home + graph island always, two entities, one page per
 * kind/case-cluster, hard cap 10 URLs x 3 runs. This replaces LHCI's
 * audit-every-page autodiscovery mode (measured 30+ min on a 173-page
 * dist, which no quality job can fit) — the autodiscovery knobs
 * (discovery depth/limits/blocklist) are retired with it; the contract
 * test pins their absence. `/admin/` exclusion is now structural: the
 * sampler never picks the staff-only CMS shell.
 *
 * `yaml` is re-used from Astro's dependency tree — the same zero-new-deps
 * pattern as `vendor/theme/config/preset.js`. Shipped as .cjs because
 * `astro check` skips CommonJS files.
 *
 * Serving contract (see the CI "Stage dist" step): emitted sites build at
 * base `/<repo>/`, so LHCI's built-in static server must serve the PARENT
 * of the site directory. CI stages `dist` at `serve/<repo>/`; this config
 * points `staticDistDir` at `serve/`, resolves the single staged site dir,
 * and passes explicit `http://localhost/<repo>/<page>.html` URLs — LHCI
 * swaps in its ephemeral server port (docs: collect.url with
 * staticDistDir).
 */
const { existsSync, readdirSync, readFileSync, statSync } = require('node:fs');
const path = require('node:path');
const { parse: parseYaml } = require('yaml');
const { sampleServedPages, toPageUrls } = require('./lighthouse-sampler.cjs');

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
// sites. The sampled page paths are joined onto the base — never treated
// as path-absolute — so each audited URL is serve/<repo>/<page> mapped to
// http://localhost/<repo>/<page> (LHCI replaces the port).
const serveDir = path.join(siteRoot, 'serve');
let staged;
try {
  staged = readdirSync(serveDir, { withFileTypes: true }).filter(
    (entry) => entry.isDirectory() && !entry.name.startsWith('.'),
  );
} catch {
  // Friendly failure (mirrors lighthouse-sampler.cjs): a raw ENOENT stack
  // here means `lhci autorun` ran before the CI staging step existed.
  throw new Error(
    `lighthouserc: no staged site dir at ${serveDir} — run the CI staging step (dist → serve/<repo>/) before lhci autorun`,
  );
}
if (staged.length !== 1) {
  throw new Error(
    `lighthouserc: expected exactly one staged site dir under serve/ (CI stages dist at serve/<repo>/), found ${staged.length}`,
  );
}
const siteDir = path.join(serveDir, staged[0].name);
if (!statSync(siteDir).isDirectory()) {
  throw new Error(`lighthouserc: staged site dir is not a directory: ${siteDir}`);
}
const base = loadSiteConfig(siteRoot)?.deploy?.base ?? '/';
const pageUrls = toPageUrls(sampleServedPages(siteDir), base);

module.exports = {
  ci: {
    collect: {
      staticDistDir: serveDir,
      url: pageUrls, // explicit URLs retire autodiscovery (issue #52)
      numberOfRuns: 3,
    },
    assert: {
      assertions,
    },
  },
};
