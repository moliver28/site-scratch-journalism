/**
 * Field-type inference: turns arbitrary entity/edge data fields into typed
 * views so unknown fields render through the generic renderer map with zero
 * component code changes.
 *
 * Inference order matters: key-shaped hints (image/evidence/ref keys) win
 * over value-shaped hints (URL, ISO date); structural checks (objects,
 * arrays) come first overall.
 */

export type FieldType =
  | 'richtext'
  | 'image'
  | 'link'
  | 'url'
  | 'date'
  | 'daterange'
  | 'entityref'
  | 'evidence'
  | 'string'
  | 'number'
  | 'boolean'
  | 'list'
  | 'table'
  | 'object';

/** Every FieldType must have a bound renderer (asserted by type-level `satisfies` in renderers/index.ts). */
export const RENDERABLE_FIELD_TYPES: readonly FieldType[] = [
  'richtext',
  'image',
  'link',
  'url',
  'date',
  'daterange',
  'entityref',
  'evidence',
  'string',
  'number',
  'boolean',
  'list',
  'table',
  'object',
];

export interface FieldView {
  key: string;
  label: string;
  value: unknown;
  type: FieldType;
}

const ISO_DATE = /^\d{4}-\d{2}(-\d{2})?([T ]\d{2}:\d{2}(:\d{2})?Z?)?$/;
/** String year-only values are accepted as range endpoints (e.g. {from: '2015', to: '2024'}),
 *  not as scalar dates. Numeric years (unquoted in YAML) are NOT accepted — they render as
 *  generic objects. */
const YEAR_ONLY = /^\d{4}$/;

function looksLikeDateValue(value: unknown): boolean {
  if (value instanceof Date) return true;
  return typeof value === 'string' && (ISO_DATE.test(value.trim()) || YEAR_ONLY.test(value.trim()));
}

const IMAGE_KEY = /(^|_)(image|photo|portrait|thumbnail|thumb|img|avatar|figure)(_|$)/i;
const EVIDENCE_KEY = /(^|_)(evidence|exhibit|citation|cite|source_file|attachment)(_|$)/i;
const ENTITY_REF_KEY = /(^|_)(ref|entity|person|org|place|event|document)$|(_ref|_entity)$|^ref$/i;
const DATE_KEY = /(^|_)(date|time|day)(_|$)|(_at|_on|_date|_time)$|(^|_)held_/i;
const RICHTEXT_KEY = /(_md|_html|_markdown)$|^(body|content|text|notes|description|summary|abstract)$/i;

/** Keys never rendered as fields (they are page structure, not content). */
export const DEFAULT_SKIP_KEYS: readonly string[] = ['id', 'slug', 'collection'];

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function looksLikeDate(value: unknown): boolean {
  return typeof value === 'string' && ISO_DATE.test(value.trim());
}

function isDateRangeObject(value: Record<string, unknown>): boolean {
  const hasStartEnd = ('start' in value || 'from' in value) && ('end' in value || 'to' in value);
  if (!hasStartEnd) return false;
  const starts = [value.start, value.from].some(looksLikeDateValue);
  const ends = [value.end, value.to].some(looksLikeDateValue);
  return starts && ends;
}

function isImageObject(value: Record<string, unknown>): boolean {
  const src = value.url ?? value.src ?? value.image;
  return typeof src === 'string' && /^https?:\/\//i.test(src);
}

function isTableArray(value: readonly unknown[]): boolean {
  return (
    value.length > 0 &&
    value.every((row) => Array.isArray(row)) &&
    value.some((row) => (row as readonly unknown[]).length > 1)
  );
}

export function inferFieldType(key: string, value: unknown): FieldType {
  if (typeof value === 'boolean') return 'boolean';
  if (typeof value === 'number') return 'number';
  // YAML loaders hand unquoted timestamps to us as Date objects.
  if (value instanceof Date) return 'date';

  if (Array.isArray(value)) {
    if (isTableArray(value)) return 'table';
    return 'list';
  }

  if (isPlainObject(value)) {
    if (isDateRangeObject(value)) return 'daterange';
    if (isImageObject(value)) return 'image';
    return 'object';
  }

  if (typeof value === 'string') {
    if (IMAGE_KEY.test(key)) return 'image';
    if (EVIDENCE_KEY.test(key)) return 'evidence';
    if (looksLikeDate(value)) return 'date';
    if (DATE_KEY.test(key) && value.trim() !== '') return 'date';
    if (/^https?:\/\//i.test(value.trim())) return 'url';
    if (ENTITY_REF_KEY.test(key)) return 'entityref';
    if (RICHTEXT_KEY.test(key)) return 'richtext';
    return 'string';
  }

  return 'object';
}

/** 'favourite_cheese' → 'Favourite cheese'; 'createdAt' → 'Created at'. */
export function humanize(key: string): string {
  const spaced = key
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .trim();
  if (spaced === '') return key;
  return spaced[0].toUpperCase() + spaced.slice(1).toLowerCase();
}

/**
 * Convert a block/entity data object into renderable field views.
 * Skips structural keys, null/undefined, and empty strings.
 */
export function fieldsOf(block: Record<string, unknown>, skip: readonly string[] = DEFAULT_SKIP_KEYS): FieldView[] {
  const skipSet = new Set(skip);
  const views: FieldView[] = [];
  for (const [key, value] of Object.entries(block)) {
    if (skipSet.has(key)) continue;
    if (value === null || value === undefined) continue;
    if (typeof value === 'string' && value.trim() === '') continue;
    views.push({ key, label: humanize(key), value, type: inferFieldType(key, value) });
  }
  return views;
}
