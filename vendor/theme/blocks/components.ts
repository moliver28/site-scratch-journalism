/**
 * Block-kind → component bindings. Sites may append their own kinds by
 * extending this object in a local wrapper before rendering; the theme's
 * Block component always falls back to the generic fields block for unknown
 * kinds, so a typo or a future kind degrades to visible plain rendering.
 */
import FieldsBlock from './FieldsBlock.astro';

/** Minimal structural type of an Astro component for the registry. */
export type BlockComponent = (props: Record<string, unknown>) => unknown;

export const blockRegistry: Record<string, BlockComponent> = {
  fields: FieldsBlock as unknown as BlockComponent,
};

export function resolveBlockComponent(kind: string): BlockComponent {
  return blockRegistry[kind] ?? (FieldsBlock as unknown as BlockComponent);
}
