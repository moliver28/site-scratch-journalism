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
 * both directions).
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

/** Config field holding the composed-page map. */
export const PAGES_FIELD = 'pages';

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
 * Zod schema for the composed-page map, against the given registry ids.
 * Everything else in site.config.yaml passes through untouched (catchall)
 * — this module owns only its field, like every other per-consumer config
 * validator.
 */
export function composedPagesSchema(blockKinds) {
  const kinds = requireBlockKinds(blockKinds);
  const blockEntry = z
    .object({
      block: z.enum(kinds),
      props: z.record(z.string(), z.unknown()).default({}),
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
 * Friendly error for a failed pages validation (#45 style: name the file,
 * the offending config path, and — for unknown block ids — the valid ids).
 * The raw Zod report rides on `cause`. Only the FIRST issue is surfaced
 * (deterministic; fix it and the next one, if any, fails the next build).
 */
function pagesValidationError(error, rawPages, blockKinds) {
  const issue = error.issues[0];
  const issuePath = issue?.path ?? [];
  const tail = issuePath[issuePath.length - 1];
  if (tail === 'block') {
    // The authored id, read back from the raw config by issue path — not
    // from Zod internals, so the message is stable across zod lines.
    const authored = valueAt(rawPages, issuePath.slice(1));
    const valid = blockKinds
      .map((id) => `"${id}"`)
      .join(', ');
    const at = issuePath.slice(1, -1).join('.');
    return new Error(
      `site.config.yaml: unknown block "${String(authored)}" in pages${at ? `.${at}` : ''} (valid: ${valid})`,
      { cause: error },
    );
  }
  // zod record keys surface as a generic "Invalid key in record" issue with
  // the slug on the path — replace it with the actual slug rule.
  const slug = issuePath.length === 2 ? issuePath[1] : undefined;
  if (typeof slug === 'string' && !SLUG_PATTERN.test(slug)) {
    return new Error(
      `site.config.yaml: pages: invalid route slug "${slug}" (slugs must be lowercase letters/digits with single -, _, or / separators — no leading/trailing separator, no dots)`,
      { cause: error },
    );
  }
  const at = issuePath.length > 1 ? issuePath.slice(1).join('.') : PAGES_FIELD;
  return new Error(`site.config.yaml: pages.${at}: ${issue?.message ?? 'invalid value'}`, { cause: error });
}

/**
 * Composed pages for a site: the validated `pages:` map, or `{}` when the
 * field is absent (also when site.config.yaml itself is absent or empty) —
 * the byte-identical no-op contract. `siteRoot` is the directory holding
 * site.config.yaml (process.cwd() for Astro sites); `options.blockKinds`
 * is REQUIRED — the registry id list, BLOCK_KINDS from
 * `@moliver28/theme/blocks/registry`.
 */
export function loadComposedPages(siteRoot = process.cwd(), options = {}) {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return {};
  const raw = parseYaml(readFileSync(file, 'utf8'));
  if (raw === null || raw === undefined) return {};
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error('site.config.yaml: top level must be a map of config fields');
  }
  const rawPages = raw[PAGES_FIELD];
  if (rawPages === undefined || rawPages === null) return {};
  // Kinds are required only once there is something to validate — the
  // no-op path (field absent) stays dependency-free.
  const blockKinds = requireBlockKinds(options.blockKinds);
  let parsed;
  try {
    parsed = composedPagesSchema(blockKinds).parse(raw);
  } catch (error) {
    if (error instanceof z.ZodError) throw pagesValidationError(error, rawPages, blockKinds);
    throw error;
  }
  return parsed[PAGES_FIELD];
}
