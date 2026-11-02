import { getCollection } from 'astro:content';
import { compileGraph } from '@sitefactory/theme/graph/compiler';

/**
 * Build-time graph document for the island. Entities + edges → static JSON.
 * Base-aware: project sites under /<repo>/ get prefixed hrefs.
 */
export const GET = async () => {
  const [entities, edges] = await Promise.all([getCollection('entities'), getCollection('edges')]);
  const graph = compileGraph(entities, edges, { base: import.meta.env.BASE_URL });
  return new Response(JSON.stringify(graph), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
