/**
 * Lychee args composer for the link-check gate (issue #53).
 *
 * External links have no flakiness policy: lychee hard-fails on bot-blocked
 * news domains (drill case: thenewstribune.com HTTP/2 protocol error), and
 * the site's own authors cannot opt a domain out. This script reads an
 * OPTIONAL `linkcheck:` block from site.config.yaml and composes the exact
 * lychee invocation for the CI quality job:
 *
 *   linkcheck:
 *     exclude_domains: []   # one `--exclude <domain>` flag per entry
 *     accept: ''            # replaces lychee's --accept value verbatim
 *
 * CRITICAL semantics (drill-learned): lychee's --accept REPLACES its
 * default accepted-status set (`100..=103,200..=299`) — it is not
 * additive. When the block is ABSENT the composed args are byte-identical
 * to the pre-#53 hard-coded invocation, so a client that never touches
 * site.config.yaml sees zero behavior change. Internal links stay strict
 * ALWAYS: `--root-dir serve` and the dist glob are never configurable
 * here, and `--exclude` only ever matches external domains.
 *
 * Validation fails loudly on wrong shapes or shell-hostile values: the
 * composed string is interpolated by lychee-action's entrypoint (`eval
 * lychee ... ${ARGS}`), so values are restricted to safe character sets.
 *
 * `yaml` is re-used from Astro's dependency tree — the same zero-new-deps
 * pattern as scripts/lighthouserc.cjs. Shipped as .cjs because `astro
 * check` skips CommonJS files.
 */
'use strict';

const { existsSync, readFileSync } = require('node:fs');
const path = require('node:path');
const { parse: parseYaml } = require('yaml');

/**
 * The pre-#53 invocation (template ci.yml quality job), kept byte-identical
 * when site.config.yaml has no linkcheck block. The single quotes around
 * the glob are load-bearing: lychee-action evals the string in bash, so the
 * quotes stop the shell from expanding the glob.
 */
const DEFAULT_ARGS = "--no-progress --exclude-all-private --exclude-loopback --root-dir serve 'dist/**/*.html'";

/** lychee --exclude values are regex patterns matched against URLs. */
const EXCLUDE_DOMAIN_PATTERN = /^[A-Za-z0-9.\-*]+$/;

/** lychee --accept values are comma-separated status-code ranges. */
const ACCEPT_PATTERN = /^[0-9,. =\-]+$/;

const LINKCHECK_KEYS = new Set(['exclude_domains', 'accept']);

/** Parse site.config.yaml ({} when absent). Exported for monitor-args.cjs. */
function loadSiteConfig(siteRoot) {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return {};
  return parseYaml(readFileSync(file, 'utf8')) ?? {};
}

/**
 * Read + validate the optional linkcheck block. Returns
 * `{ exclude_domains: string[], accept?: string }`; an absent or null block
 * (YAML `linkcheck:` with no value) means "no policy overrides".
 */
function readLinkcheckConfig(siteRoot) {
  const configured = loadSiteConfig(siteRoot)?.linkcheck;
  if (configured === undefined || configured === null) {
    return { exclude_domains: [] };
  }
  if (typeof configured !== 'object' || Array.isArray(configured)) {
    throw new Error('site.config.yaml: linkcheck must be a map with optional exclude_domains and accept');
  }
  for (const key of Object.keys(configured)) {
    if (!LINKCHECK_KEYS.has(key)) {
      throw new Error(
        `site.config.yaml: unknown linkcheck key "${key}" (valid: ${[...LINKCHECK_KEYS].join(', ')})`,
      );
    }
  }

  let excludeDomains = [];
  if (configured.exclude_domains !== undefined && configured.exclude_domains !== null) {
    if (!Array.isArray(configured.exclude_domains)) {
      throw new Error('site.config.yaml: linkcheck.exclude_domains must be a list of domain patterns');
    }
    excludeDomains = configured.exclude_domains.map((domain) => {
      if (typeof domain !== 'string' || !EXCLUDE_DOMAIN_PATTERN.test(domain)) {
        throw new Error(
          `site.config.yaml: linkcheck.exclude_domains entries must be domain patterns matching ${EXCLUDE_DOMAIN_PATTERN.source}, got ${JSON.stringify(domain)}`,
        );
      }
      return domain;
    });
  }

  let accept;
  if (configured.accept !== undefined && configured.accept !== null) {
    if (typeof configured.accept !== 'string' || !ACCEPT_PATTERN.test(configured.accept)) {
      throw new Error(
        `site.config.yaml: linkcheck.accept must be a lychee status-range string matching ${ACCEPT_PATTERN.source} (it REPLACES the default accepted set), got ${JSON.stringify(configured.accept)}`,
      );
    }
    accept = configured.accept;
  }

  return { exclude_domains: excludeDomains, accept };
}

/**
 * Compose the lychee args string for the CI link-check step. Absent policy
 * => DEFAULT_ARGS byte-for-byte; configured policy appends `--exclude`
 * flags and a single-quoted `--accept` value after the base flags, before
 * the (quoted) input glob.
 */
function composeLinkcheckArgs(policy) {
  const { exclude_domains: excludeDomains = [], accept } = policy ?? {};
  if (excludeDomains.length === 0 && accept === undefined) return DEFAULT_ARGS;

  const parts = [
    '--no-progress',
    '--exclude-all-private',
    '--exclude-loopback',
    '--root-dir serve',
  ];
  for (const domain of excludeDomains) {
    // Single-quoted like --accept below: lychee-action evals the composed
    // string in bash, so an unquoted glob value (e.g. `*`) would undergo
    // pathname expansion against the runner cwd and corrupt the invocation.
    parts.push(`--exclude '${domain}'`);
  }
  if (accept !== undefined) {
    // Single-quoted: lychee-action evals the composed string in bash, and
    // accept values may contain spaces ("200..=204, 429"). The value was
    // validated above against ACCEPT_PATTERN (no quote/meta characters).
    parts.push(`--accept '${accept}'`);
  }
  parts.push("'dist/**/*.html'");
  return parts.join(' ');
}

// CLI entry (CI step: `echo "args=$(node scripts/linkcheck-args.cjs)" >> "$GITHUB_OUTPUT"`).
// Optional argv[2] overrides the site root; default is the site checkout root.
if (require.main === module) {
  const siteRoot = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');
  process.stdout.write(composeLinkcheckArgs(readLinkcheckConfig(siteRoot)));
}

module.exports = { DEFAULT_ARGS, loadSiteConfig, readLinkcheckConfig, composeLinkcheckArgs };
