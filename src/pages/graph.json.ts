import { getCollection } from 'astro:content';
import { compileGraph } from '@moliver28/theme/graph/compiler';

/**
 * Build-time graph document for the island. Entities + custom-entities +
 * edges → static JSON (sitefactory#19: custom-entities are graph nodes; kind
 * comes from their `kind` field, href targets /custom-entities/<id>/).
 * Base-aware: project sites under /<repo>/ get prefixed hrefs.
 */
export const GET = async () => {
  const [entities, edges, customEntities] = await Promise.all([
    getCollection('entities'),
    getCollection('edges'),
    getCollection('customEntities'),
  ]);
  const graph = compileGraph(entities, edges, { base: import.meta.env.BASE_URL, customEntities });
  return new Response(JSON.stringify(graph), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
