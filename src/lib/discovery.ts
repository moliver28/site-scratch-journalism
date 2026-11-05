/**
 * Reader-discovery gates (P9 UX F3): the optional `discovery:` block in
 * site.config.yaml. Defaults are ALL ON — a site that never touches the
 * block gets the XML sitemap, the RSS feed (/rss.xml), Open Graph + Twitter
 * cards, and JSON-LD. Setting a key to false opts that feature out at the
 * next build; unknown keys and non-boolean values fail the build loudly
 * (bad config must fail fast, not silently degrade — same philosophy as
 * scripts/linkcheck-args.cjs).
 *
 * Every consumer resolves through this module — astro.config.mjs (sitemap
 * integration), src/pages/rss.xml.ts (feed route), and
 * src/components/DiscoveryHead.astro (head tags) — so the four keys can
 * never disagree between surfaces.
 *
 * `yaml` is re-used from Astro's dependency tree — the same zero-new-deps
 * pattern as scripts/linkcheck-args.cjs and the theme's preset resolver.
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

export const DISCOVERY_DEFAULTS: Discovery = {
  sitemap: true,
  rss: true,
  opengraph: true,
  jsonld: true,
};

export interface Discovery {
  sitemap: boolean;
  rss: boolean;
  opengraph: boolean;
  jsonld: boolean;
}

const DISCOVERY_KEYS: readonly string[] = ['sitemap', 'rss', 'opengraph', 'jsonld'];

export function resolveDiscovery(siteRoot: string = process.cwd()): Discovery {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return { ...DISCOVERY_DEFAULTS };
  const raw = parseYaml(readFileSync(file, 'utf8'))?.discovery;
  if (raw === undefined || raw === null) return { ...DISCOVERY_DEFAULTS };
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error(
      'site.config.yaml: discovery must be a map with boolean keys sitemap, rss, opengraph, jsonld',
    );
  }
  const result: Discovery = { ...DISCOVERY_DEFAULTS };
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!DISCOVERY_KEYS.includes(key)) {
      throw new Error(
        `site.config.yaml: unknown discovery key "${key}" (valid: ${DISCOVERY_KEYS.join(', ')})`,
      );
    }
    if (typeof value !== 'boolean') {
      throw new Error(
        `site.config.yaml: discovery.${key} must be a boolean (omit the key for the default: true)`,
      );
    }
    result[key as keyof Discovery] = value;
  }
  return result;
}
