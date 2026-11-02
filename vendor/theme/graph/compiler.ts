/**
 * Graph compiler: entities + edges collections → static GraphJSON.
 *
 * Runs at build time inside the site's `graph.json` endpoint, so the sigma.js
 * island fetches a fully-resolved static file (no client-side YAML, no
 * hydration mismatch). The same entities/edges drive the non-graph views.
 *
 * Fails fast on dangling edge references — a broken reference is a data bug,
 * not something the UI should paper over.
 */
import { colorForKind } from './palette';

export interface RawEntity {
  id: string;
  data?: Record<string, unknown>;
}

export interface RawEdge {
  id: string;
  data?: Record<string, unknown>;
}

export interface GraphNodeJSON {
  id: string;
  label: string;
  kind: string;
  color: string;
  /** Pixel size (theme island uses itemSizesReference: 'screen'). */
  size: number;
  /** Convention link target; sites may override via a `url` data field. */
  href: string;
  /** Non-display data fields, for the island's entity card. */
  fields: Record<string, unknown>;
}

export interface GraphEdgeJSON {
  id: string;
  source: string;
  target: string;
  kind: string;
  color: string;
  /** 1 (low confidence) .. 3 (high); drawn as line thickness. */
  weight: number;
  evidence: string[];
  confidence: string;
}

export interface GraphJSON {
  nodes: GraphNodeJSON[];
  edges: GraphEdgeJSON[];
  legend: Array<{ kind: string; color: string; nodeCount: number }>;
  /** Only set when opts.now is provided (reproducible builds). */
  generatedAt?: string;
}

export interface CompileOptions {
  /** Explicit kind→color overrides; unmatched kinds fall back to the palette. */
  palette?: Record<string, string>;
  /** Emit a generatedAt timestamp (reproducible builds pass a fixed value). */
  now?: string;
  /**
   * Base path for conventional hrefs (Astro's import.meta.env.BASE_URL).
   * Project sites hosted under /<repo>/ must pass it or links 404.
   */
  base?: string;
}

/** Data fields that describe the node itself and are never repeated in the card. */
const DISPLAY_INTERNAL_FIELDS = new Set(['name', 'title', 'type', 'kind', 'url']);

const CONFIDENCE_WEIGHT: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

const EDGE_COLOR = '#b3bcc4';

export class CompileGraphError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CompileGraphError';
  }
}

function dataOf(entry: RawEntity | RawEdge): Record<string, unknown> {
  return entry.data ?? {};
}

function labelOf(id: string, data: Record<string, unknown>): string {
  const name = data.name ?? data.title;
  if (typeof name === 'string' && name.trim() !== '') return name;
  return id;
}

function kindOf(data: Record<string, unknown>): string {
  const kind = data.type ?? data.kind;
  return typeof kind === 'string' && kind.trim() !== '' ? kind : 'entity';
}

function hrefOf(id: string, data: Record<string, unknown>, base: string): string {
  const url = data.url;
  if (typeof url === 'string' && url.trim() !== '') return url;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}entities/${id}/`;
}

function weightOf(data: Record<string, unknown>): number {
  const w = data.weight;
  if (typeof w === 'number' && w >= 1 && w <= 3) return w;
  const confidence = data.confidence;
  if (typeof confidence === 'string') return CONFIDENCE_WEIGHT[confidence] ?? 2;
  return 2;
}

function evidenceOf(data: Record<string, unknown>): string[] {
  const ev = data.evidence;
  if (!Array.isArray(ev)) return [];
  return ev.filter((v): v is string => typeof v === 'string');
}

function resolveColor(kind: string, overrides: Record<string, string> | undefined): string {
  return overrides?.[kind] ?? colorForKind(kind);
}

/**
 * Compile entity and edge collection entries into the static graph document.
 *
 * @throws CompileGraphError on duplicate entity ids or dangling edge references.
 */
export function compileGraph(
  entities: readonly RawEntity[],
  edges: readonly RawEdge[],
  options: CompileOptions = {},
): GraphJSON {
  const base = options.base ?? '/';
  const nodes: GraphNodeJSON[] = [];
  const nodeIds = new Set<string>();
  const kindCounts = new Map<string, number>();

  for (const entity of entities) {
    if (nodeIds.has(entity.id)) {
      throw new CompileGraphError(`Duplicate entity id "${entity.id}"`);
    }
    nodeIds.add(entity.id);
    const data = dataOf(entity);
    const kind = kindOf(data);
    kindCounts.set(kind, (kindCounts.get(kind) ?? 0) + 1);

    const fields: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data)) {
      if (!DISPLAY_INTERNAL_FIELDS.has(key)) fields[key] = value;
    }

    nodes.push({
      id: entity.id,
      label: labelOf(entity.id, data),
      kind,
      color: resolveColor(kind, options.palette),
      size: 5,
      href: hrefOf(entity.id, data, base),
      fields,
    });
  }

  const dangling: string[] = [];
  for (const edge of edges) {
    const data = dataOf(edge);
    for (const [label, ref] of [['from', data.from], ['to', data.to]] as const) {
      if (typeof ref !== 'string' || !nodeIds.has(ref)) {
        dangling.push(`${edge.id} ${label}=${String(ref)}`);
      }
    }
  }
  if (dangling.length > 0) {
    throw new CompileGraphError(
      `Edges reference unknown entities (fix the data, do not render it broken): ${dangling.join(', ')}`,
    );
  }

  const graphEdges: GraphEdgeJSON[] = edges.map((edge) => {
    const data = dataOf(edge);
    const kind = typeof data.kind === 'string' && data.kind.trim() !== '' ? data.kind : 'related';
    return {
      id: edge.id,
      source: String(data.from),
      target: String(data.to),
      kind,
      color: EDGE_COLOR,
      weight: weightOf(data),
      evidence: evidenceOf(data),
      confidence: typeof data.confidence === 'string' ? data.confidence : 'medium',
    };
  });

  // Degree-based node sizing (screen px) — the one visual signal on nodes.
  const degree = new Map<string, number>();
  for (const edge of graphEdges) {
    degree.set(edge.source, (degree.get(edge.source) ?? 0) + 1);
    degree.set(edge.target, (degree.get(edge.target) ?? 0) + 1);
  }
  for (const node of nodes) {
    node.size = 5 + 2 * (degree.get(node.id) ?? 0);
  }

  const legend = [...kindCounts.entries()]
    .map(([kind, nodeCount]) => ({ kind, color: resolveColor(kind, options.palette), nodeCount }))
    .sort((a, b) => b.nodeCount - a.nodeCount || a.kind.localeCompare(b.kind));

  const out: GraphJSON = { nodes, edges: graphEdges, legend };
  if (options.now) out.generatedAt = options.now;
  return out;
}
