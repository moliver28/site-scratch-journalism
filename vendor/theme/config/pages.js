/**
 * Composed-page recipes (plan P6.7) — the OPTIONAL `pages:` block in
 * `site.config.yaml`.
 *
 * A site composes a page as an ordered list of theme blocks, declared
 * entirely in config — no markdown file, no template edit:
 *
 *   pages:
 *     about:
 *       title: About this investigation
 *       description: Optional; feeds <meta description> and OG cards.
 *       blocks:
 *         - block: fields        # a block-registry id (BLOCK_KINDS)
 *           props:               # data the block renders (definition list)
 *             mission: Independent tracking of the Riverside clearance.
 *
 * Each slug ships the route `/pages/<slug>/` through a route that passes
 * the ordered block list to the theme's BlockList component. Sites inject
 * that route from `astro.config.mjs` ONLY when the map is non-empty (the
 * rss-feed-route gating pattern): with no `pages:` field the route module
 * never enters the build graph, so every pre-existing render stays
 * byte-identical. Markdown pages keep priority at the shared `/pages/`
 * pattern (verified: Astro serves the file-based route first), so the
 * injected route's path set EXCLUDES markdown ids — a slug that collides
 * with a markdown page renders the markdown page, and no route conflict
 * ever registers. Nested slugs (`case/summary`) work like markdown page
 * ids. Composed pages carry no date, so they never fabricate RSS items.
 *
 * Validation is build-time and loud (same philosophy as the `theme_preset`
 * resolver, config/preset.js): an unknown `block:` id fails the build
 * naming the valid registry ids (#45 friendly-error style), a slug outside
 * `[a-z0-9/_-]` (which includes any `..` traversal attempt) is rejected
 * before it can become a route path, and every other shape error names the
 * offending config path. When the field is ABSENT (the default shipped
 * config), `loadComposedPages` returns `{}` and nothing anywhere changes —
 * the byte-identical no-op path that keeps this feature free for sites
 * that do not use it.
 *
 * Shipped as plain JS with no hand-written declaration (issue #26 F10: the
 * .d.ts duplicated signatures and could only drift); importing sites
 * declare the module via a one-line ambient shim next to the preset
 * loader's. `yaml` and `astro/zod` are re-used from Astro's own dependency
 * tree; the theme never declares them directly (same pattern as
 * config/preset.js). The registry id list is NOT imported here — this
 * module must stay loadable by Astro's plain-ESM config loader (which does
 * no .js→.ts extension substitution), so callers pass it in:
 * `loadComposedPages(root, { blockKinds: BLOCK_KINDS })` with BLOCK_KINDS
 * from `@moliver28/theme/blocks/registry` (the pure list that
 * blocks/components.ts pins to the real component map at build time in
 * both directions). P14 B1a adds the optional `options.blockVariants` map.
 *
 * P14 B2 adds, on the SAME schema: the `home:` key — ONE page spec (same
 * pageSpec), mounted at `/` by packs that emit the composed-home branch;
 * `options.withHome` appends the validated home spec to the returned
 * record. Entries gain `id:` (section anchor; nav `/#<id>` links resolve
 * against it — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_an_element_on_the_same_page)
 * and `source: {collection, type?}` (the route fetches the collection and
 * hands its records to the block as its items). Both fields validate when
 * EITHER is present, so a bad `home:` fails at config load.
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

/** Config field holding the composed-page map. */
export const PAGES_FIELD = 'pages';

/** Config field holding the composed one-page home (P14 B2) — one pageSpec. */
export const HOME_FIELD = 'home';

/**
 * Route slug rule: lowercase alnum segments joined by single `-`, `_`, or
 * `/` separators — the markdown page id shape (e.g. `the-river-case`,
 * `case/court-filings`). Excludes dots outright, so no slug can carry a
 * `..` traversal segment into the emitted route tree.
 */
const SLUG_PATTERN = /^[a-z0-9]+([-_/][a-z0-9]+)*$/;

/**
 * The registry id list every loader call must pass (see module JSDoc for
 * why this module does not import it). Failing loudly here beats an empty
 * Zod enum that would reject every block id with a baffling error.
 */
function requireBlockKinds(blockKinds) {
  if (!Array.isArray(blockKinds) || blockKinds.length === 0) {
    throw new Error(
      'loadComposedPages/composedPagesSchema: pass the block-registry ids — { blockKinds: BLOCK_KINDS } from "@moliver28/theme/blocks/registry"',
    );
  }
  return blockKinds;
}

/**
 * Zod schema for the composed-page map (+ the P14 B2 `home:` spec) against
 * the given registry ids; everything else passes through untouched
 * (catchall). `pages` is optional so a `home:`-only config reaches home
 * validation.
 */
export function composedPagesSchema(blockKinds) {
  const kinds = requireBlockKinds(blockKinds);
  const blockEntry = z
    .object({
      block: z.enum(kinds),
      props: z.record(z.string(), z.unknown()).default({}),
      variant: z.string().optional(),
      id: z.string().regex(/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/, 'anchor ids must be lowercase letters/digits with single - separators, starting with a letter').optional(),
      source: z.object({ collection: z.string().min(1, 'name the collection to fetch (e.g. "entities")'), type: z.string().min(1).optional() }).strict().optional(),
    })
    .strict();
  const pageSpec = z
    .object({
      title: z.string(),
      description: z.string().optional(),
      blocks: z.array(blockEntry).min(1, 'a composed page needs at least one block (a page with no blocks is a markdown page in src/content/pages/)'),
    })
    .strict();
  return z
    .object({
      [PAGES_FIELD]: z.record(
        z.string().regex(SLUG_PATTERN, 'route slugs must be lowercase letters/digits with single -, _, or / separators (no leading/trailing separator, no dots)'),
        pageSpec,
      ),
      [HOME_FIELD]: pageSpec.optional(),
    })
    .catchall(z.unknown());
}

/** Walk a parsed raw object along a Zod issue path ([]-safe). */
function valueAt(raw, issuePath) {
  let node = raw;
  for (const segment of issuePath) {
    if (node === null || typeof node !== 'object') return undefined;
    node = node[segment];
  }
  return node;
}

/**
 * Friendly error for a failed composed-pages/home validation (#45 style:
 * file, offending path, valid ids where relevant). Works for BOTH fields
 * (the issue path's first segment is the field); only the FIRST Zod issue
 * is surfaced (deterministic).
 */
function pagesValidationError(error, rawConfig, blockKinds) {
  const issue = error.issues[0];
  const issuePath = issue?.path ?? [];
  const field = issuePath[0] === HOME_FIELD ? HOME_FIELD : PAGES_FIELD;
  const tail = issuePath[issuePath.length - 1];
  if (tail === 'block') {
    const authored = valueAt(rawConfig, issuePath);
    const valid = blockKinds
      .map((id) => `"${id}"`)
      .join(', ');
    const at = issuePath.slice(1, -1).join('.');
    return new Error(
      `site.config.yaml: unknown block "${String(authored)}" in ${field}${at ? `.${at}` : ''} (valid: ${valid})`,
      { cause: error },
    );
  }
  // zod record keys surface as a generic "Invalid key" issue (slug on the path).
  const slug = field === PAGES_FIELD && issuePath.length === 2 ? issuePath[1] : undefined;
  if (typeof slug === 'string' && !SLUG_PATTERN.test(slug)) {
    return new Error(
      `site.config.yaml: pages: invalid route slug "${slug}" (slugs must be lowercase letters/digits with single -, _, or / separators — no leading/trailing separator, no dots)`,
      { cause: error },
    );
  }
  const at = issuePath.length > 1 ? issuePath.slice(1).join('.') : '';
  return new Error(`site.config.yaml: ${field}${at ? `.${at}` : ''}: ${issue?.message ?? 'invalid value'}`, { cause: error });
}

/**
 * Per-entry variant validation + fold (P14 B1a; B2 extends it to the home
 * spec): an entry-level `variant:` must be declared for its kind in
 * `blockVariants` (omitted callers stay green while no entry declares one —
 * e.g. a site importing pages.js without the registry). Unknown variants
 * fail naming the kind and valid ids; a valid variant FOLDS into entry props.
 */
function foldVariants(specs, blockVariants) {
  for (const spec of specs) {
    for (const entry of spec.blocks) {
      if (entry.variant === undefined) continue;
      if (blockVariants === undefined) throw new Error('loadComposedPages: an entry declares variant: — pass { blockVariants: BLOCK_VARIANTS } from "@moliver28/theme/blocks/registry"');
      const valid = Array.isArray(blockVariants[entry.block]) ? blockVariants[entry.block] : [];
      if (!valid.includes(entry.variant)) throw new Error(`site.config.yaml: unknown variant "${entry.variant}" on block "${entry.block}" (valid: ${valid.map((id) => `"${id}"`).join(', ') || 'none'})`);
      entry.props = { ...entry.props, variant: entry.variant };
      delete entry.variant;
    }
  }
}

/** Anchor-id uniqueness (P14 B2): a duplicate fails naming both block positions. */
function requireUniqueAnchors(field, slug, spec) {
  const seen = new Map();
  spec.blocks.forEach((entry, index) => {
    if (entry.id === undefined) return;
    const prior = seen.get(entry.id);
    if (prior !== undefined) throw new Error(`site.config.yaml: ${field}${slug ? `.${slug}` : ''}: anchor id "${entry.id}" is declared twice (blocks ${prior} and ${index}) — anchor ids must be unique within one page`);
    seen.set(entry.id, index);
  });
}

/**
 * Per-kind source items (P14 B2): the props slot each LIST-shaped block
 * reads (the `Props:` contract in blocks/*Block.astro) and the entity-field
 * ladders each item field accepts — first defined key wins (`name` is the
 * entities builtin's required display field; the prose ladder covers the
 * four GENERIC content words — no vertical vocabulary). Kinds ABSENT are
 * single-record kinds: the FIRST fetched record merges over authored props
 * (pass `skip={['name', 'type']}`).
 */
export const SOURCE_ITEMS = {
  faq: { key: 'items', fields: { q: ['q', 'question'], a: ['a', 'answer'] } },
  cards: { key: 'cards', fields: { title: ['title', 'name'], text: ['text', 'description', 'blurb', 'note'], image: ['image', 'cover'], url: ['url'], cta_label: ['cta_label'] } },
  timeline: { key: 'events', fields: { date: ['date'], title: ['title', 'name'], description: ['description', 'text'], state: ['state'] } },
  stats: { key: 'stats', fields: { value: ['value'], label: ['label', 'name'] } },
  media: { key: 'images', fields: null },
};

/**
 * Resolve one composed entry's `source` against a fetched collection:
 * filter by `type` when declared, sort `order` asc then id asc, then hand
 * the records to the block — its items slot for list kinds, first record
 * merged over authored props otherwise ("props merge under the fetched
 * items"). Pure; the unit suite pins the behaviors.
 */
export function resolveSourceEntry(entry, entries) {
  const source = entry.source;
  if (!source) return entry;
  const pick = (record, fields) =>
    Object.fromEntries(Object.entries(fields).map(([key, ladder]) => [key, ladder.map((name) => record[name]).find((value) => value !== undefined)]));
  const fetched = entries
    .filter((candidate) => !source.type || (candidate.data ?? {}).type === source.type)
    .sort((a, b) => Number((a.data ?? {}).order ?? 0) - Number((b.data ?? {}).order ?? 0) || String(a.id).localeCompare(String(b.id)));
  const slot = SOURCE_ITEMS[entry.block];
  const props = { ...entry.props };
  if (slot) props[slot.key] = fetched.map((candidate) => (slot.fields ? pick(candidate.data ?? {}, slot.fields) : candidate.data ?? {}));
  else if (fetched.length > 0) Object.assign(props, fetched[0].data ?? {});
  return { ...entry, props };
}

/**
 * Parse + validate both composed fields over a loaded raw config (P14 B2):
 * returns `{ pages, home }`; both validate whenever EITHER is present. A
 * home-only config parses against a synthesized empty pages record — the
 * schema keeps `pages` REQUIRED so the inferred type of
 * `parsed[PAGES_FIELD]` stays the indexable record callers rely on.
 */
function parseComposed(raw, options) {
  const hasPages = raw[PAGES_FIELD] != null;
  const hasHome = raw[HOME_FIELD] != null;
  const blockKinds = requireBlockKinds(options.blockKinds);
  let parsed;
  try {
    parsed = composedPagesSchema(blockKinds).parse(hasPages ? raw : { ...raw, [PAGES_FIELD]: {} });
  } catch (error) {
    if (error instanceof z.ZodError) throw pagesValidationError(error, raw, blockKinds);
    throw error;
  }
  const home = hasHome ? parsed[HOME_FIELD] : undefined;
  const pages = parsed[PAGES_FIELD];
  foldVariants([...Object.values(pages), ...(home ? [home] : [])], options.blockVariants);
  if (home) requireUniqueAnchors(HOME_FIELD, '', home);
  for (const [slug, spec] of Object.entries(pages)) requireUniqueAnchors(PAGES_FIELD, slug, spec);
  return { pages, home };
}

/**
 * Composed pages for a site: the validated `pages:` map, or `{}` when the
 * field is absent — the byte-identical no-op contract. `options.blockKinds`
 * is REQUIRED (see module JSDoc); `blockVariants` when an entry declares
 * `variant:` (B1a); `withHome: true` appends the `home` key (B2). The
 * `home:` spec is ALWAYS validated, with or without the flag.
 */
export function loadComposedPages(siteRoot = process.cwd(), options = {}) {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return {};
  const raw = parseYaml(readFileSync(file, 'utf8'));
  if (raw === null || raw === undefined) return {};
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error('site.config.yaml: top level must be a map of config fields');
  }
  if (raw[PAGES_FIELD] == null && raw[HOME_FIELD] == null) return {};
  const loaded = parseComposed(raw, options);
  // Object.assign keeps the inferred index signature — a spread drops it.
  return Object.assign({}, loaded.pages, options.withHome ? { home: loaded.home } : {});
}
