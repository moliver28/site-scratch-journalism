/**
 * Block-kind → component bindings. Sites may append their own kinds by
 * extending this object in a local wrapper before rendering; the theme's
 * Block component always falls back to the generic fields block for unknown
 * kinds, so a typo or a future kind degrades to visible plain rendering.
 */
import { BLOCK_KINDS, BLOCK_VARIANTS } from './registry';
import FieldsBlock from './FieldsBlock.astro';
import HeroBlock, { supportedVariants as heroVariants } from './HeroBlock.astro';
import StatsBlock, { supportedVariants as statsVariants } from './StatsBlock.astro';
import TimelineBlock, { supportedVariants as timelineVariants } from './TimelineBlock.astro';
import QuoteBlock, { supportedVariants as quoteVariants } from './QuoteBlock.astro';
import MediaBlock, { supportedVariants as mediaVariants } from './MediaBlock.astro';
import FaqBlock from './FaqBlock.astro';
import CardsBlock from './CardsBlock.astro';

/** Minimal structural type of an Astro component for the registry. */
export type BlockComponent = (props: Record<string, unknown>) => unknown;

export const blockRegistry: Record<string, BlockComponent> = {
  fields: FieldsBlock as unknown as BlockComponent,
  hero: HeroBlock as unknown as BlockComponent,
  stats: StatsBlock as unknown as BlockComponent,
  timeline: TimelineBlock as unknown as BlockComponent,
  quote: QuoteBlock as unknown as BlockComponent,
  media: MediaBlock as unknown as BlockComponent,
  faq: FaqBlock as unknown as BlockComponent,
  cards: CardsBlock as unknown as BlockComponent,
};

/**
 * Registry integrity (P6.7): BLOCK_KINDS (the pure list config validation
 * checks against) and this component map must name exactly the same kinds.
 * Checked in BOTH directions at build time — this module runs whenever any
 * site builds (Block.astro imports it), so drift fails that build before
 * anything ships: a listed kind with no binding, or a renderable kind
 * missing from BLOCK_KINDS (which would make config validation reject a
 * block the theme can actually render), can never reach a rendered page.
 */
const unrenderable = BLOCK_KINDS.filter((kind) => !(kind in blockRegistry));
if (unrenderable.length > 0) {
  throw new Error(`block registry: BLOCK_KINDS entries with no component binding: ${unrenderable.join(', ')}`);
}
const unlisted = Object.keys(blockRegistry).filter((kind) => !(BLOCK_KINDS as readonly string[]).includes(kind));
if (unlisted.length > 0) {
  throw new Error(`block registry: component bindings missing from BLOCK_KINDS: ${unlisted.join(', ')}`);
}

/**
 * Variant parity (P14 B1a): BLOCK_VARIANTS must equal what the components
 * actually render — each block exports its supportedVariants from
 * frontmatter (absent export = none), checked both ways at build time.
 */
const variantSurfaces: Record<string, readonly string[]> = { hero: heroVariants, stats: statsVariants, timeline: timelineVariants, quote: quoteVariants, media: mediaVariants };
const variantDrift = BLOCK_KINDS.filter((kind) => (variantSurfaces[kind] ?? []).join('|') !== BLOCK_VARIANTS[kind].join('|'));
if (variantDrift.length > 0) throw new Error(`block registry: BLOCK_VARIANTS <> component supportedVariants drift on: ${variantDrift.join(', ')}`);

export function resolveBlockComponent(kind: string): BlockComponent {
  return blockRegistry[kind] ?? (FieldsBlock as unknown as BlockComponent);
}
