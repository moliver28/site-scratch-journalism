/**
 * Build-time route resolution for entity-reference fields (sitefactory#19).
 *
 * EntityRef.astro renders during static build, where Astro content
 * collections are not reachable from a renderer component — so instead of
 * reading collections, the component hands us the FILE LISTS of the two
 * entity collections, obtained with Vite's import.meta.glob (keys only; the
 * files themselves are never loaded). This module turns those keys into
 * routes, pure and unit-testable.
 *
 * Resolution prefers the `entities` collection and falls back to
 * `custom-entities`. An id found in neither keeps the legacy
 * /entities/<id>/ route (the pre-#19 behavior), so entity-only sites render
 * byte-identical markup.
 */

export type EntityRefRoute = 'entities' | 'custom-entities';

/** Route segment for each collection (matches the conventional detail routes). */
const ROUTE_BY_COLLECTION: Record<EntityRefRoute, string> = {
  entities: 'entities',
  'custom-entities': 'custom-entities',
};

/**
 * Content-collection file key → entry id. Keys are Vite glob keys
 * (project-root-absolute, forward slashes): '/src/content/entities/lab.yaml'
 * with dir 'entities' → 'lab'; nested files keep their relative path
 * ('cases/lab.yaml' → 'cases/lab'), mirroring the glob loader's id rule.
 */
export function idFromContentKey(key: string, collection: EntityRefRoute): string {
  const marker = `/${ROUTE_BY_COLLECTION[collection]}/`;
  const at = key.indexOf(marker);
  if (at < 0) return '';
  return key
    .slice(at + marker.length)
    .replace(/\.[^./]+$/, '');
}

function idsFromKeys(keys: readonly string[], collection: EntityRefRoute): Set<string> {
  const ids = new Set<string>();
  for (const key of keys) {
    const id = idFromContentKey(key, collection);
    if (id !== '') ids.add(id);
  }
  return ids;
}

/**
 * Resolve an entity-ref id to its conventional base-aware href. Prefer the
 * `entities` collection; fall back to `custom-entities`; unknown ids keep
 * the legacy entities route.
 */
export function resolveEntityHref(
  id: string,
  base: string,
  entityKeys: readonly string[],
  customEntityKeys: readonly string[],
): string {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  if (idsFromKeys(entityKeys, 'entities').has(id)) return `${prefix}entities/${id}/`;
  if (idsFromKeys(customEntityKeys, 'custom-entities').has(id)) return `${prefix}custom-entities/${id}/`;
  return `${prefix}entities/${id}/`;
}
