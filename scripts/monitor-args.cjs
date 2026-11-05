/**
 * Lychee args composer for the WEEKLY post-publish link monitor (P9 UX F10,
 * .github/workflows/monitor.yml). Deliberately a separate script from
 * scripts/linkcheck-args.cjs: that gate checks the BUILD at PR time
 * (dist glob + --root-dir serve); this one targets the DEPLOYED production
 * site, so inputs and flags differ even where policy overlaps.
 *
 * Production URL derivation: `https://<owner>.github.io<deploy.base>` —
 * the same composition the generated astro.config.mjs pins as `site` +
 * `base`. site.config.yaml carries no explicit production-URL key today;
 * when a custom-domain story lands it must add that key HERE and in
 * astro.config.mjs together (tracked upstream: P9-UX F2).
 *
 * Input: the deployed sitemap-0.xml — lychee extracts and checks every URL
 * a sitemap lists (see lychee.cli.rs recipes/migration), which covers the
 * whole site without a crawler. When `discovery.sitemap` is false the site
 * has no sitemap, so the composer degrades to the production homepage:
 * nav links still reach every index route, but entity detail pages go
 * unchecked — the documented cost of opting out of discovery.sitemap.
 *
 * Policy reuse: the PR-time `linkcheck:` block (exclude_domains, accept)
 * is read through scripts/linkcheck-args.cjs so ONE declarative block
 * governs both gates — a bot-blocked domain opted out at PR time does not
 * resurface as a weekly false alarm. SSRF safety is NOT configurable:
 * --exclude-all-private (lychee's private + link-local + loopback bundle)
 * and --exclude-loopback are always present.
 *
 * Validation fails loudly: owner/base are shape-checked AND restricted to
 * hostname-safe characters — the composed string is single-quoted and
 * eval'd by lychee-action's entrypoint (`eval lychee ... ${ARGS}`), so
 * meta characters never reach the shell (same policy shape as the linkcheck
 * composer's EXCLUDE_DOMAIN_PATTERN/ACCEPT_PATTERN).
 *
 * `yaml` is re-used from Astro's dependency tree (same zero-new-deps
 * pattern as linkcheck-args.cjs). Shipped as .cjs because `astro check`
 * skips CommonJS files.
 */
'use strict';

const path = require('node:path');
const { loadSiteConfig, readLinkcheckConfig } = require('./linkcheck-args.cjs');

/** GitHub owner slotted into `https://<owner>.github.io` — hostname-safe. */
const OWNER_PATTERN = /^[A-Za-z0-9.-]+$/;

/** Pages base path: absolute, charset-restricted, optional trailing slash. */
const BASE_PATTERN = /^\/[A-Za-z0-9._/-]*\/?$/;

/**
 * Production origin + base path from site.config.yaml, with a trailing
 * slash — ready to take sitemap-0.xml or act as the homepage input.
 */
function productionUrl(siteRoot) {
  const config = loadSiteConfig(siteRoot);
  const owner = config?.owner;
  const base = config?.deploy?.base;
  if (typeof owner !== 'string' || !owner) {
    throw new Error('site.config.yaml: missing owner (needed to derive the production URL)');
  }
  if (!OWNER_PATTERN.test(owner)) {
    throw new Error(
      `site.config.yaml: owner must match ${OWNER_PATTERN.source} (hostname-safe), got ${JSON.stringify(owner)}`,
    );
  }
  if (typeof base !== 'string' || !BASE_PATTERN.test(base)) {
    throw new Error(
      `site.config.yaml: deploy.base must be an absolute path like /<repo>/ matching ${BASE_PATTERN.source}, got ${JSON.stringify(base)}`,
    );
  }
  return `https://${owner}.github.io${base.endsWith('/') ? base : `${base}/`}`;
}

/**
 * Whether the site ships a sitemap: `discovery.sitemap` defaults ON;
 * only an explicit `false` turns it off (same default-ON semantics as
 * src/lib/discovery.ts at build time). A malformed discovery block is NOT
 * validated here (the build already fails loudly on it).
 */
function shipsSitemap(siteRoot) {
  const raw = loadSiteConfig(siteRoot)?.discovery;
  return raw?.sitemap !== false;
}

/**
 * Compose the lychee args for monitor.yml: SSRF-safe flags, then the
 * shared linkcheck policy (--exclude per domain, single-quoted --accept),
 * then the single-quoted input URL (sitemap when available, homepage
 * otherwise). Single quotes are load-bearing — lychee-action evals the
 * composed string in bash.
 */
function composeMonitorArgs(siteRoot) {
  const input = shipsSitemap(siteRoot)
    ? `${productionUrl(siteRoot)}sitemap-0.xml`
    : productionUrl(siteRoot);
  const { exclude_domains: excludeDomains = [], accept } = readLinkcheckConfig(siteRoot);
  const parts = ['--no-progress', '--exclude-all-private', '--exclude-loopback'];
  for (const domain of excludeDomains) {
    parts.push(`--exclude '${domain}'`);
  }
  if (accept !== undefined) {
    parts.push(`--accept '${accept}'`);
  }
  parts.push(`'${input}'`);
  return parts.join(' ');
}

// CLI entry (monitor.yml step: `args=$(node scripts/monitor-args.cjs)`).
// Optional argv[2] overrides the site root; default is the site checkout root.
if (require.main === module) {
  const siteRoot = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');
  process.stdout.write(composeMonitorArgs(siteRoot));
}

module.exports = { composeMonitorArgs, productionUrl, shipsSitemap };
