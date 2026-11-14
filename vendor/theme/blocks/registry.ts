/**
 * Block registry (pure part): maps a block's declared `kind` to a canonical
 * name. Component binding lives in blocks/components.ts (imports .astro, so
 * it is consumed only at build time by Block.astro — never by unit tests).
 *
 * Sites add block kinds by contributing to their local copy of the registry
 * component map; unknown kinds fall back to the generic fields block instead
 * of failing the build — new block types must never require theme changes.
 */

export const FALLBACK_BLOCK_KIND = 'fields';

/**
 * Canonical registry surface (P6.7): every block kind the theme ships, in
 * display order. Pure list — no .astro imports — so build-time config
 * validation (config/pages.js) can Zod-check composed pages against the
 * ids that are actually renderable. components.ts asserts at build time
 * that this list and its component map name exactly the same kinds in both
 * directions: a listed kind with no binding, and a binding with no listing,
 * are both build errors, so this list can never drift from what renders.
 *
 * This list is what a `site.config.yaml` `pages:` entry may reference as
 * `block:`; an unknown id fails the build naming the valid ids (#45 style).
 * Data-driven blocks (entity `kind:` fields) intentionally do NOT validate
 * against it — unknown data kinds fall back to the generic fields block
 * (the auto-adapt moat). Config is authored intent: there a typo must fail
 * the build loudly, not silently render a fallback.
 */
export const BLOCK_KINDS = ['fields', 'hero', 'stats', 'timeline', 'quote', 'media', 'faq', 'cards'] as const;

export type BlockKind = (typeof BLOCK_KINDS)[number];

/**
 * Per-kind variant surface (P14 B1a): layout variants a composed entry may
 * declare as `variant:`; empty list = the kind rejects every variant.
 * Exact-match ids — config/pages.js validates against the map the caller
 * passes (#45 style); components.ts pins this map to the components'
 * exported supportedVariants both ways at build time. Adding a variant =
 * one entry here + markup + specimen + pin. Sources: hero centered = Bulma
 * Hero + Every Layout Cover (https://bulma.io/documentation/components/hero/, https://every-layout.dev/layouts/cover/); hero split = Every Layout Sidebar (https://every-layout.dev/layouts/sidebar/); hero gradient-bg = Open Props gradient pack mapped through preset tokens (https://open-props.style/); hero image-bg = ImageRenderer safe-src gate + the composed-pages veil; stats grid = DaisyUI Stats (https://daisyui.com/components/stat/); timeline horizontal = DaisyUI Timeline (https://daisyui.com/components/timeline/); timeline steps = DaisyUI Steps, state-driven dot colors (https://daisyui.com/components/steps/); quote card = DaisyUI Card (https://daisyui.com/components/card/); quote band = shadcn Card (https://ui.shadcn.com/docs/components/card); media reel = Every Layout Reel (https://every-layout.dev/layouts/reel/).
 */
export const BLOCK_VARIANTS = {
  fields: [], hero: ['centered', 'split', 'gradient-bg', 'image-bg'],
  stats: ['grid'], timeline: ['horizontal', 'steps'], quote: ['card', 'band'], media: ['reel'], faq: [], cards: [],
} as const satisfies Record<BlockKind, readonly string[]>;

export function normalizeBlockKind(kind: unknown): string {
  if (typeof kind === 'string' && kind.trim() !== '') return kind.trim().toLowerCase();
  return FALLBACK_BLOCK_KIND;
}
