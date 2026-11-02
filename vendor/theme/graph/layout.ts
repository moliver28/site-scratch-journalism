/**
 * Deterministic initial positions for a graphology graph.
 *
 * graphology-layout-forceatlas2 requires every node to carry numeric x/y
 * attributes before assign(); missing seeds become NaN and poison the whole
 * layout. Seeding on a circle by insertion order keeps builds reproducible
 * (no Math.random) and gives FA2 a sane starting configuration.
 */

export interface SeedableGraph {
  nodes(): Iterable<string>;
  setNodeAttribute(node: string, name: 'x' | 'y', value: number): unknown;
}

export function seedCircularPositions(graph: SeedableGraph): void {
  const ids = [...graph.nodes()];
  const n = ids.length;
  if (n === 0) return;
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    graph.setNodeAttribute(ids[i], 'x', Math.cos(angle));
    graph.setNodeAttribute(ids[i], 'y', Math.sin(angle));
  }
}

export interface LaidOutGraph {
  nodes(): Iterable<string>;
  edges(): Iterable<string>;
  degree(node: string): number;
  /** Attribute values come back unknown from graphology's generic store. */
  getNodeAttribute(node: string, name: 'x' | 'y'): unknown;
  setNodeAttribute(node: string, name: 'x' | 'y' | 'size', value: number): unknown;
  setEdgeAttribute(edge: string, name: 'size', value: number): unknown;
}

/**
 * Scale node/edge sizes in *position units* after the layout runs.
 *
 * Sizes proportional to the graph extent stay visually stable at any zoom
 * (this is sigma v4's default 'positions' sizes reference) and are
 * deterministic — no dependence on viewport pixels.
 */
export function applyLayoutScaledSizes(
  graph: LaidOutGraph,
  options: { nodeRatio?: number; edgeRatio?: number } = {},
): void {
  const nodeRatio = options.nodeRatio ?? 0.05;
  const edgeRatio = options.edgeRatio ?? 0.0045;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const node of graph.nodes()) {
    const x = Number(graph.getNodeAttribute(node, 'x'));
    const y = Number(graph.getNodeAttribute(node, 'y'));
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const extent = Math.max(maxX - minX, maxY - minY, 1e-6);
  const nodeBase = extent * nodeRatio;
  const edgeBase = extent * edgeRatio;

  for (const node of graph.nodes()) {
    graph.setNodeAttribute(node, 'size', nodeBase * (0.8 + 0.3 * graph.degree(node)));
  }
  for (const edge of graph.edges()) {
    graph.setEdgeAttribute(edge, 'size', edgeBase);
  }
}
