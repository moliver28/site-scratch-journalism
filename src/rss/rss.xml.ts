/**
 * RSS 2.0 feed (P9 UX F3), served at /rss.xml (base-aware, so on a GitHub
 * Pages project site: /<repo>/rss.xml).
 *
 * This endpoint lives OUTSIDE src/pages on purpose: astro.config.mjs
 * registers it via injectRoute ONLY when `discovery.rss` is on (default).
 * Gating at route-registration time is what makes the opt-out complete —
 * dist/rss.xml is never emitted at all. (A getStaticPaths gate would NOT
 * do this: Astro ignores getStaticPaths on non-dynamic routes — verified
 * against the 7.x build.)
 *
 * Feed material: entries of the `pages` collection that carry a parseable
 * `date:` frontmatter field, newest first. Undated pages are omitted — RSS
 * items want a pubDate, and undated case pages are not news. Profiles and
 * edges (entities/edges/custom-entities) have no date fields and never
 * belong in the feed.
 *
 * Links are absolute and base-aware, built from BASE_URL + SITE (the same
 * composition DiscoveryHead uses for og:url) — never relative, since feed
 * readers fetch items away from the site origin.
 *
 * Feed language: an optional top-level `language:` key in site.config.yaml
 * (BCP-47 tag, client-settable without a template re-render); falls back to
 * en-us, the template's only shipped locale. The value is interpolated into
 * XML customData, so the charset is restricted and a wrong shape fails the
 * build loudly (same config-validation philosophy as src/lib/discovery.ts).
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { parse as parseYaml } from 'yaml';

/** Frontmatter `date:` accepts YAML dates (js-yaml → Date) or strings. */
function toDate(value: unknown): Date | undefined {
  if (value instanceof Date) return value;
  if (typeof value === 'string' && !Number.isNaN(new Date(value).getTime())) {
    return new Date(value);
  }
  return undefined;
}

/** BCP-47-ish: 2-8 letter primary tag + optional script/region subtags. */
const FEED_LANGUAGE_PATTERN = /^[A-Za-z]{2,8}(-[A-Za-z0-9]{2,8})*$/;

function feedLanguage(siteRoot: string = process.cwd()): string {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return 'en-us';
  const language: unknown = parseYaml(readFileSync(file, 'utf8'))?.language;
  if (language === undefined || language === null) return 'en-us';
  if (typeof language !== 'string' || !FEED_LANGUAGE_PATTERN.test(language)) {
    throw new Error(
      `site.config.yaml: language must be a BCP-47-style tag matching ${FEED_LANGUAGE_PATTERN.source}, got ${JSON.stringify(language)}`,
    );
  }
  return language;
}

export const GET: APIRoute = async () => {
  const pages = await getCollection('pages');
  const items = pages
    .map((entry: CollectionEntry<'pages'>) => ({ entry, date: toDate(entry.data.date) }))
    .filter((item): item is { entry: CollectionEntry<'pages'>; date: Date } => item.date !== undefined)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map(({ entry, date }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: date,
      link: new URL(`${import.meta.env.BASE_URL}pages/${entry.id}/`, import.meta.env.SITE).href,
    }));

  return rss({
    title: 'Scratch Journalism Site',
    description: 'Deploy smoke for the sitefactory journalism template.',
    // site + links both fold in the base path (BASE_URL), so the feed is
    // correct on GitHub Pages project sites as well as rooted deploys.
    site: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href,
    items,
    customData: `<language>${feedLanguage()}</language>`,
  });
};
