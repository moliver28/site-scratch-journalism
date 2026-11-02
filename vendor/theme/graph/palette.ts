/**
 * Kind → color mapping for graph nodes. Deterministic: the same kind always
 * gets the same color within a build, and sites can pin explicit overrides.
 * Colors chosen for >=3:1 contrast against the light surface.
 */
export const DEFAULT_PALETTE: readonly string[] = [
  '#0e7268', // teal
  '#1a56a8', // blue
  '#8a4db6', // violet
  '#c2452d', // brick
  '#b07a00', // ochre
  '#3e7b27', // moss
  '#a83a78', // magenta
  '#2f7d8a', // cyan-slate
  '#7a5230', // umber
  '#4a5fc1', // indigo
];

/** Stable non-crypto string hash (FNV-1a). */
function hashKind(kind: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < kind.length; i++) {
    h ^= kind.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function colorForKind(kind: string, palette: readonly string[] = DEFAULT_PALETTE): string {
  return palette[hashKind(kind) % palette.length];
}

/**
 * Build a complete kind→color map for a set of kinds (used by the graph
 * compiler so the legend and the nodes always agree).
 */
export function kindPalette(kinds: readonly string[], palette: readonly string[] = DEFAULT_PALETTE): Map<string, string> {
  const map = new Map<string, string>();
  for (const kind of kinds) map.set(kind, colorForKind(kind, palette));
  return map;
}
