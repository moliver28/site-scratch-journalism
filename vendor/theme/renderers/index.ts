/**
 * Field-type → renderer component map.
 *
 * `fieldRenderers` must cover every FieldType: the `satisfies` check below
 * enforces parity at compile time, so adding a FieldType without a renderer
 * fails `astro check`, not a user's page.
 */
import type { FieldType } from '../blocks/fields';
import Scalar from './Scalar.astro';
import RichText from './RichText.astro';
import ImageRenderer from './ImageRenderer.astro';
import LinkRenderer from './LinkRenderer.astro';
import DateRange from './DateRange.astro';
import EntityRef from './EntityRef.astro';
import EvidenceCite from './EvidenceCite.astro';
import ConfidenceBadge from './ConfidenceBadge.astro';
import TelRenderer from './TelRenderer.astro';
import EmailRenderer from './EmailRenderer.astro';
import RatingRenderer from './RatingRenderer.astro';
import MeterRenderer from './MeterRenderer.astro';
import BadgeRenderer from './BadgeRenderer.astro';
import HoursRenderer from './HoursRenderer.astro';
import GalleryRenderer from './GalleryRenderer.astro';
import ListRenderer from './ListRenderer.astro';
import TableRenderer from './TableRenderer.astro';
import ObjectFallback from './ObjectFallback.astro';

export const fieldRenderers = {
  richtext: RichText,
  image: ImageRenderer,
  link: LinkRenderer,
  url: LinkRenderer,
  date: Scalar,
  daterange: DateRange,
  entityref: EntityRef,
  evidence: EvidenceCite,
  confidence: ConfidenceBadge,
  tel: TelRenderer,
  email: EmailRenderer,
  rating: RatingRenderer,
  meter: MeterRenderer,
  badge: BadgeRenderer,
  hours: HoursRenderer,
  gallery: GalleryRenderer,
  string: Scalar,
  number: Scalar,
  boolean: Scalar,
  list: ListRenderer,
  table: TableRenderer,
  object: ObjectFallback,
} satisfies Record<FieldType, unknown>;

export type FieldRenderer = (typeof fieldRenderers)[FieldType];
