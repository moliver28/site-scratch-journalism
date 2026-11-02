/**
 * @moliver28/theme public surface (pure logic only — components are
 * consumed via the exports subpaths and compiled by the site's Astro).
 */
export {
  compileGraph,
  CompileGraphError,
  type GraphJSON,
  type GraphNodeJSON,
  type GraphEdgeJSON,
  type RawEntity,
  type RawEdge,
  type CompileOptions,
} from './graph/compiler';
export { kindPalette, DEFAULT_PALETTE, colorForKind } from './graph/palette';
export {
  inferFieldType,
  fieldsOf,
  humanize,
  RENDERABLE_FIELD_TYPES,
  type FieldType,
  type FieldView,
} from './blocks/fields';
export { normalizeBlockKind, FALLBACK_BLOCK_KIND } from './blocks/registry';
