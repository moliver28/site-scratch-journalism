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

export function normalizeBlockKind(kind: unknown): string {
  if (typeof kind === 'string' && kind.trim() !== '') return kind.trim().toLowerCase();
  return FALLBACK_BLOCK_KIND;
}
