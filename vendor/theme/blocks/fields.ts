/**
 * Field-type inference: turns arbitrary entity/edge data fields into typed
 * views so unknown fields render through the generic renderer map with zero
 * component code changes.
 *
 * Inference order matters: key-shaped hints (image/evidence/confidence/ref
 * keys) win over value-shaped hints (URL, ISO date); structural checks
 * (objects, arrays) come first overall.
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
  | 'confidence'
  | 'tel'
  | 'email'
  | 'rating'
  | 'meter'
  | 'badge'
  | 'hours'
  | 'gallery'
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
  'confidence',
  'tel',
  'email',
  'rating',
  'meter',
  'badge',
  'hours',
  'gallery',
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

/** ISO date/dateTime shape — exported for the Scalar fallback so detection and rendering share one predicate. */
export const ISO_DATE = /^\d{4}-\d{2}(-\d{2})?([T ]\d{2}:\d{2}(:\d{2})?Z?)?$/;
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
/** `confidence` keys valued 'low' render as an "Unverified" badge (sitefactory#18); 'high'/'medium' stay plain strings. */
const CONFIDENCE_KEY = /(^|_)confidence(_|$)/i;
const ENTITY_REF_KEY = /(^|_)(ref|entity|person|org|place|event|document)$|(_ref|_entity)$|^ref$/i;
// `profile` is included (issue #14): a person/organisation bio is
// multi-paragraph prose, not a scalar string.
const RICHTEXT_KEY = /(_md|_html|_markdown)$|^(body|content|text|notes|description|summary|abstract|profile)$/i;
/** Exact phone keys only (#88): `contact_phone`/`tel_number` stay generic —
 *  widening the key set would tel-link prose values on near-miss keys. */
const TEL_KEY = /^(tel|phone|telephone)$/i;
/** Bounded-number rating keys (#88): out-of-range values stay plain numbers. */
const RATING_KEY = /(^|_)(rating|score|stars)(_|$)/i;
/** Chip keys (P14 A2): a singular string or a string-list value renders as accent chips. */
const BADGE_KEY = /(^|_)(status|state|tags|labels)(_|$)/i;
/** Highest rating the star renderer shows (the glyph row is a 5-star scale;
 *  the exact value still renders as text). Outside [0, 5] a rating key
 *  degrades to the generic number renderer rather than mis-starring. */
export const RATING_MAX = 5;
/**
 * The rating renderer's slipped-past guard (#88): inference only routes
 * numbers here, but a direct theme consumer can hand the component
 * anything — a non-number or non-finite value renders as plain text
 * (the TelRenderer slipped-past contract), never the star row with a
 * "Rated NaN out of 5" accessible name. Range stays a renderer concern
 * (finite out-of-range values clamp their glyphs and show the true
 * number), so this predicate is deliberately number-ness only.
 */
export function isRenderableRating(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}
/** Highest value the meter bar shows (P14 A2); outside [0, 100] a meter key degrades to the generic number renderer. */
export const METER_MAX = 100;
/** The meter renderer's slipped-past guard (the isRenderableRating contract): a non-number, non-finite, or out-of-range value renders as plain text, never a misleading bar. */
export function isRenderableMeter(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= METER_MAX;
}
/** Chip payloads (P14 A2, the isImageObject single-source precedent): a non-empty string is one chip, an all-string list a row; null degrades to plain text. */
export function badgeChips(value: unknown): string[] | null {
  if (typeof value === 'string') return value.trim() === '' ? null : [value];
  if (!Array.isArray(value) || value.length === 0) return null;
  return value.every((entry) => typeof entry === 'string' && entry.trim() !== '') ? (value as string[]) : null;
}
/** A day column plus an open/close-ish column (#88). `weekday`/`days` cover
 *  common spellings; `hours` in the open/close slot covers `{"Mon": "9-5"}`
 *  via the dayish-key escape below. */
const HOURS_DAY_KEY = /^(day|days|weekday|date)$/i;
const HOURS_RANGE_KEY = /^(open|opens|opening|close|closes|closing|hours)$/i;

/** Keys never rendered as fields (they are page structure, not content). */
export const DEFAULT_SKIP_KEYS: readonly string[] = ['id', 'slug', 'collection'];

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function looksLikeDate(value: unknown): boolean {
  return typeof value === 'string' && ISO_DATE.test(value.trim());
}

/**
 * A phone-shaped string (#88): digits with the usual separators, starting
 * and ending digit-ish. A `phone:` key carrying prose ("call the desk")
 * degrades to the generic string renderer instead of a broken tel: link.
 */
function looksLikePhoneValue(value: string): boolean {
  const trimmed = value.trim();
  return /^\+?[\d][\d\s().-]{2,}[\d)]$/.test(trimmed) && trimmed.replace(/\D/g, '').length >= 5;
}

function isDateRangeObject(value: Record<string, unknown>): boolean {
  const hasStartEnd = ('start' in value || 'from' in value) && ('end' in value || 'to' in value);
  if (!hasStartEnd) return false;
  const starts = [value.start, value.from].some(looksLikeDateValue);
  const ends = [value.end, value.to].some(looksLikeDateValue);
  return starts && ends;
}

/**
 * Image-object shape: {url|src|image: "https?://…"}. Exported for the
 * gallery renderer (#88) so the detection single source of truth stays
 * here — the renderer re-filters with the same predicate that typed it.
 */
export function isImageObject(value: Record<string, unknown>): boolean {
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

/**
 * Opening-hours rows (#88): a non-empty array where every element is a dict
 * carrying a day-ish key AND an open/close-ish key. Deliberately disjoint
 * from isTableArray (rows of arrays) — a list of dicts used to fall through
 * to the plain `list` renderer, which JSON-dumps structured hours.
 */
function isHoursArray(value: readonly unknown[]): boolean {
  return (
    value.length > 0 &&
    value.every((row) => {
      if (!isPlainObject(row)) return false;
      const hasDay = Object.keys(row).some((k) => HOURS_DAY_KEY.test(k));
      const hasRange = Object.keys(row).some((k) => HOURS_RANGE_KEY.test(k));
      return hasDay && hasRange;
    })
  );
}

/**
 * Image gallery (#88): a non-empty array where every element is an image
 * object ({url|src|image: https?://…}) — the same shape the image renderer
 * already accepts, so each entry renders through it unchanged.
 */
function isGalleryArray(value: readonly unknown[]): boolean {
  return value.length > 0 && value.every((entry) => isPlainObject(entry) && isImageObject(entry));
}

export function inferFieldType(key: string, value: unknown): FieldType {
  if (typeof value === 'boolean') return 'boolean';
  if (typeof value === 'number') {
    if (RATING_KEY.test(key) && value >= 0 && value <= RATING_MAX) return 'rating';
    if (/(^|_)(progress|completion|capacity)(_|$)/i.test(key) && isRenderableMeter(value)) return 'meter';
    return 'number';
  }
  // YAML loaders hand unquoted timestamps to us as Date objects.
  if (value instanceof Date) return 'date';

  if (Array.isArray(value)) {
    if (isHoursArray(value)) return 'hours';
    if (isGalleryArray(value)) return 'gallery';
    if (isTableArray(value)) return 'table';
    if (BADGE_KEY.test(key) && badgeChips(value) !== null) return 'badge';
    return 'list';
  }

  if (isPlainObject(value)) {
    if (isDateRangeObject(value)) return 'daterange';
    if (isImageObject(value)) return 'image';
    return 'object';
  }

  if (typeof value === 'string') {
    if (/^email$/i.test(key) && value.includes('@')) return 'email';
    if (BADGE_KEY.test(key) && badgeChips(value) !== null) return 'badge';
    if (TEL_KEY.test(key) && looksLikePhoneValue(value)) return 'tel';
    if (IMAGE_KEY.test(key)) return 'image';
    if (EVIDENCE_KEY.test(key)) return 'evidence';
    if (CONFIDENCE_KEY.test(key) && value.trim().toLowerCase() === 'low') return 'confidence';
    // P14 rider (momus P2): the key hint alone NEVER yields `date` — a
    // non-ISO value on a date-ish key (`time_zone: UTC`) stays a generic
    // string; only date-shaped values reach the <time> renderer.
    if (looksLikeDate(value)) return 'date';
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
