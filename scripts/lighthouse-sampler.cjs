/**
 * Deterministic stratified page sampler for the Lighthouse gate (issue #52).
 *
 * Autodiscovery audited EVERY built page (audit-every-page mode x
 * numberOfRuns: 3) — O(pages) Lighthouse runs that measured 30+ min on a
 * 173-page dist and cannot fit CI. This module replaces autodiscovery with
 * a fixed, reproducible sample computed from a plain `node:fs` walk of the
 * built dist (the same no-Astro-runtime pattern as tests/e2e/gates.spec.ts):
 *
 *   1. home (`index.html`) and the graph island (`graph/index.html`, the
 *      performance budget-floor page) are ALWAYS included;
 *   2. two entity detail pages (content floor: >= 2 entities, enforced by
 *      the gates spec);
 *   3. one page per kind: every `pages/<case-slug>/` cluster contributes
 *      exactly one page per case, and every `custom-entities/` kind cluster
 *      contributes one page (plus the collection index when present);
 *   4. remaining slots up to the hard cap (10) are filled with any pages
 *      not yet picked, in sorted order — small sites therefore audit every
 *      page, large sites audit a bounded, representative stratum.
 *
 * Pages clusters come before custom-entity clusters, so under a small cap
 * the pages-kind floor outranks the custom-entity fast path.
 *
 * Non-content routes are never sampled: `/admin/` (staff-only CMS shell)
 * and `404.html`. Ordering is fully deterministic (sorted walk + fixed
 * assembly), so CI runs are comparable across commits.
 *
 * Exports are pure functions so the factory vitest suite can unit-test the
 * sampler directly against fake dist trees (templates/journalism/test/).
 */
'use strict';

const { readdirSync } = require('node:fs');
const path = require('node:path');

/** Hard cap on audited URLs: ~10 pages x 3 runs stays inside the quality job. */
const DEFAULT_CAP = 10;

/** Route segments that never contain auditable reader-facing pages. */
const EXCLUDED_SEGMENTS = new Set(['admin', 'pr-preview']);

/** Built files that are not content pages. */
const EXCLUDED_FILES = new Set(['404.html']);

/** Collections with dedicated sampling rules (everything else fills slots). */
const ENTITY_PREFIX = 'entities';
const PAGES_PREFIX = 'pages';
const CUSTOM_PREFIX = 'custom-entities';

function listHtmlFiles(distDir) {
  const found = [];
  const walk = (dir) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      throw new Error(`lighthouse-sampler: dist directory is not readable: ${dir}`);
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (EXCLUDED_SEGMENTS.has(entry.name) || entry.name.startsWith('.')) continue;
        walk(path.join(dir, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        if (EXCLUDED_FILES.has(entry.name)) continue;
        // Posix-style path relative to distDir, regardless of host OS.
        found.push(
          path
            .relative(distDir, path.join(dir, entry.name))
            .split(path.sep)
            .join('/'),
        );
      }
    }
  };
  walk(distDir);
  return found.sort();
}

/**
 * Cluster key for a collection route: the first path segment after the
 * collection dir. `pages/<case>/doc/index.html` clusters per case ("one per
 * case"); a flat `pages/<doc>/index.html` is its own cluster;
 * `custom-entities/<kind>/<id>/index.html` clusters per kind; the
 * `custom-entities/index.html` collection index is its own pseudo-cluster
 * (key `custom-entities/`, sorts first among custom-entity clusters).
 */
function clusterKey(rel) {
  const segs = rel.split('/');
  const rest = segs.slice(1);
  if (rest.length === 1 && rest[0] === 'index.html') {
    return `${segs[0]}/`;
  }
  return `${segs[0]}/${rest[0]}`;
}

/**
 * Sample a built site directory (e.g. `serve/<repo>/`) and return the pages
 * to audit as sorted-order-stable, posix-style paths relative to `distDir`.
 * Throws loudly on a dist that cannot satisfy the floors: no pages, missing
 * home, missing graph island, or fewer than two entities.
 */
function sampleServedPages(distDir, { cap = DEFAULT_CAP } = {}) {
  if (!Number.isInteger(cap) || cap < 2) {
    throw new Error(`lighthouse-sampler: cap must be an integer >= 2, got ${cap}`);
  }

  const files = listHtmlFiles(distDir);
  if (files.length === 0) {
    throw new Error(
      `lighthouse-sampler: no HTML files under ${distDir} — stage the gates build artifact first (CI: download site-dist)`,
    );
  }

  const home = 'index.html';
  if (!files.includes(home)) {
    throw new Error(`lighthouse-sampler: home page missing (expected ${home})`);
  }
  const island = 'graph/index.html';
  if (!files.includes(island)) {
    throw new Error(`lighthouse-sampler: graph island missing (expected ${island})`);
  }

  const entities = files.filter((file) => file.startsWith(`${ENTITY_PREFIX}/`));
  if (entities.length < 2) {
    throw new Error(
      `lighthouse-sampler: expected >= 2 entity pages under ${ENTITY_PREFIX}/, found ${entities.length}`,
    );
  }

  const picked = [home, island, entities[0], entities[1]];
  const seen = new Set(picked);
  const push = (file) => {
    if (seen.has(file) || picked.length >= cap) return;
    seen.add(file);
    picked.push(file);
  };

  // One page per cluster. Pages clusters (one per case) come first — the
  // kind floor that matters most — then custom-entity clusters (one per
  // kind; the collection index is its own pseudo-cluster and sorts first).
  // Within each collection, plain string order of `collection/cluster`
  // keys. Under a small cap this truncates the LATER collections first.
  const clusters = new Map();
  for (const file of files) {
    const collection = file.split('/')[0];
    if (collection !== PAGES_PREFIX && collection !== CUSTOM_PREFIX) continue;
    const key = clusterKey(file);
    if (!clusters.has(key)) clusters.set(key, []);
    clusters.get(key).push(file);
  }
  const keys = [...clusters.keys()].sort();
  for (const key of keys.filter((k) => k.startsWith(`${PAGES_PREFIX}/`))) {
    push(clusters.get(key)[0]);
  }
  for (const key of keys.filter((k) => k.startsWith(`${CUSTOM_PREFIX}/`))) {
    push(clusters.get(key)[0]);
  }

  // Fill leftover slots (sorted walk order) so small sites audit everything.
  for (const file of files) {
    if (picked.length >= cap) break;
    push(file);
  }

  return picked;
}

/**
 * Map sampled dist-relative paths to the absolute URLs LHCI should audit.
 * `base` is `deploy.base` from site.config.yaml ('/' or '/<repo>/'); the
 * LHCI static server serves the PARENT of the site dir (CI stages dist at
 * `serve/<repo>/`), and LHCI replaces the port of `http://localhost` URLs
 * with its chosen ephemeral port (docs: collect.url + staticDistDir).
 */
function toPageUrls(relPaths, base) {
  const normalized = String(base ?? '/');
  const prefix =
    normalized === '/' ? '/' : `/${normalized.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');
  return relPaths.map((rel) => new URL(path.posix.join(prefix, rel), 'http://localhost').href);
}

module.exports = { DEFAULT_CAP, sampleServedPages, toPageUrls };
