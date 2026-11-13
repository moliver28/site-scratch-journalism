import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { extensions } from './content.extensions';

/**
 * Content schemas. Known fields are typed; `.catchall(z.unknown())` lets any
 * unknown field through validation so the theme's fallback renderers display
 * it — new data fields need zero component code changes.
 *
 * Edge `from`/`to` are validated against existing entities at build time by
 * the theme's graph compiler (dangling references fail the build).
 */
const entities = defineCollection({
  loader: glob({
    // Both extensions the route surfaces agree on: the e2e route gate scans
    // .yaml + .yml and the EntityRef resolver globs {yaml,yml}, so a .yml
    // entity file MUST load here too — a .yaml-only pattern would ship no
    // route for it while the gate still scans one (404) and the resolver
    // still hrefs one (dangling link) (momus P3 rider on #97).
    pattern: '**/*.{yaml,yml}',
    base: './src/content/entities',
    // Same rule as pages (#50): derive the id from the file path minus its
    // extension. The glob-loader default instead honors frontmatter `slug`,
    // github-slugs each path segment, and strips trailing `/index` — so an
    // entity carrying `slug:` or an unclean filename would scan a URL Astro
    // never ships (momus P2 rider on #89). The e2e route gate and the
    // theme's build-time EntityRef resolver both derive ids from the raw
    // slash path with the extension stripped, so this explicit rule keeps
    // gate URLs == shipped routes == resolved hrefs for every input.
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ''),
  }),
  schema: z
    .object({
      name: z.string(),
      type: z.string().default('entity'),
      summary: z.string().optional(),
    })
    .catchall(z.unknown()),
});

const edges = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/edges' }),
  schema: z
    .object({
      from: z.string(),
      to: z.string(),
      kind: z.string(),
      evidence: z.array(z.string()).default([]),
      confidence: z.enum(['high', 'medium', 'low']).default('medium'),
    })
    .catchall(z.unknown()),
});

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/pages',
    // Issue #50: the glob loader's default id slugs from frontmatter `slug`
    // when present, so migrated pages of one case that carry a case-level
    // `slug:` collapse into ONE route (7 files → 2 routes, silent loss).
    // Derive the id from the filename stem instead — one route per file,
    // matching how entities/edges/custom-entities ids work.
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ''),
  }),
  schema: z
    .object({
      title: z.string(),
      description: z.string().optional(),
      order: z.number().default(10),
    })
    .catchall(z.unknown()),
});

// Fast path for brand-new entity kinds: loose schema, generic renderers.
const customEntities = defineCollection({
  loader: glob({
    // {yaml,yml} like entities: the gate and the EntityRef resolver cover
    // both extensions, so the loader must too (see entities above).
    pattern: '**/*.{yaml,yml}',
    base: './src/content/custom-entities',
    // Same stem rule as entities/pages above: the EntityRef resolver derives
    // custom-entity ids from the raw slash path (nested files like
    // `documents/permit-88.yaml` keep `documents/permit-88`), so the
    // glob-loader default (frontmatter slug, per-segment slugging, `/index`
    // strip) would resolve hrefs to routes that never ship.
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ''),
  }),
  schema: z
    .object({
      name: z.string(),
      kind: z.string().default('custom'),
      summary: z.string().optional(),
    })
    .catchall(z.unknown()),
});

export const collections = { entities, edges, pages, customEntities, ...extensions };
