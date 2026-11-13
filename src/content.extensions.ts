import { defineCollection } from 'astro:content';

/**
 * Client-owned schema extensions (sitefactory ADR #85).
 *
 * This file is YOURS — the only schema file you edit. The template-owned
 * core `src/content.config.ts` imports and applies this record, and copier
 * never rewrites it once it exists (`_skip_if_exists` in the template's
 * copier.yml), so your schema customizations survive every
 * `copier recopy -l -w` update. Never edit `src/content.config.ts` itself:
 * a recopy overwrites it.
 *
 * Keys are collection names; values are content collections. An entry whose
 * key matches a schema-pack collection (entities, edges, pages,
 * customEntities) REPLACES it — re-assert the collection definition you
 * need (copy the core definition, then modify). A new key ADDS a
 * collection. The record ships empty, so an unused seam changes nothing.
 *
 * Boundaries (sitefactory packs/README.md): one-site tweaks live here;
 * vertical-wide models belong in the schema-pack (a template PR). The
 * Sveltia admin config is pack-emitted — a client-added collection gets no
 * admin UI until upstreamed.
 */
export const extensions: Record<string, ReturnType<typeof defineCollection>> = {};
