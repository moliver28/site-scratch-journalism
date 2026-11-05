import { readdirSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility gate for generated sites (issue #4 / P7.2 S2).
 *
 * Route discovery walks `src/content/` with node:fs — no Astro runtime.
 * The content floor is LOUD-FAIL-ON-NONEMPTY (momus rider on #89, landed
 * in #97): an empty or missing collection is a VALID state — a fresh
 * client repo starts with zero content and its first CI must be green —
 * so the floor is skipped for it. Any content that DOES exist in a
 * collection demands the floor (>=2 entities, >=1 page), so a non-empty
 * collection below the floor fails right here; `/` and `/graph/` are
 * scanned unconditionally.
 *
 * axe serious/critical violations fail the gate; moderate/minor issues are
 * report-only (console.warn) to keep failures actionable, not noisy.
 * Scans run after `networkidle` so client-rendered content is present.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');

/**
 * Route ids of a content collection, discovered at FULL depth: the content
 * collections glob every file recursively, and page ids derive from the
 * path relative to the collection root with the extension stripped (the
 * glob loader's generateId, #50) — so `pages/<case>/file.md` has id
 * `<case>/file` and renders at `/pages/<case>/file/` via the [...id] rest
 * route. Flat-only discovery would both undercount routes (breaking the
 * floor on nested content) and build wrong URLs (404 on the axe scan).
 * #61 aligned this walk with the factory render-smoke floor.
 */
function collectionIds(dir: string, extensions: string[]): string[] {
  const root = path.join(CONTENT_ROOT, dir);
  const walk = (current: string): string[] => {
    let entries;
    try {
      entries = readdirSync(current, { withFileTypes: true });
    } catch {
      // Missing collection directory → empty id list. That is a valid
      // state (the floor only applies to collections that HAVE content,
      // see the floor test below) — it must not fail the gate here.
      return [];
    }
    return entries.flatMap((entry) => {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) return walk(full);
      return extensions.some((ext) => entry.name.endsWith(ext))
        ? [path.relative(root, full).split(path.sep).join('/').replace(/\.[^.]+$/, '')]
        : [];
    });
  };
  return walk(root).sort();
}

const entityRoutes = collectionIds('entities', ['.yaml', '.yml']).map((id) => `/entities/${id}/`);
const pageRoutes = collectionIds('pages', ['.md']).map((id) => `/pages/${id}/`);

test('route discovery finds real content (floor)', () => {
  // The floor is LOUD-FAIL-ON-NONEMPTY, not absolute: a fully EMPTY
  // collection is a valid state (mirrors the factory's empty-scaffold
  // leg, which pins that a fresh scaffold with zero content builds and
  // ships zero routes), and a fresh client repo's first CI must be green
  // before it has written anything. But ANY content in a collection
  // demands the floor — one orphan entity (non-empty, <2) is a discovery
  // bug, not a stub, and still fails right here. Only the zero-files
  // case skips; / and /graph/ are scanned unconditionally below.
  if (entityRoutes.length > 0) {
    expect(
      entityRoutes.length,
      // No empty-list fallback here: the guard guarantees a non-empty
      // list, so the join can never be blank (momus rider on #97).
      `expected >=2 entities under src/content/entities, found: ${entityRoutes.join(', ')}`,
    ).toBeGreaterThanOrEqual(2);
  }
  if (pageRoutes.length > 0) {
    expect(
      pageRoutes.length,
      `expected >=1 page under src/content/pages, found: ${pageRoutes.join(', ')}`,
    ).toBeGreaterThanOrEqual(1);
  }
});

const routes = ['/', '/graph/', ...entityRoutes, ...pageRoutes];

type Violation = Awaited<ReturnType<AxeBuilder['analyze']>>['violations'][number];
const summarize = (violation: Violation) => ({
  id: violation.id,
  impact: violation.impact,
  count: violation.nodes.length,
});

for (const route of routes) {
  test(`axe scan: ${route}`, async ({ page, baseURL }) => {
    // Route paths are base-relative and must be JOINED onto the base path,
    // never treated as path-absolute: URL resolution drops the base path
    // from a leading-slash goto ('/graph/' -> origin/graph/), which would
    // silently scan the 404 page — a sterile pass. Joining the stripped
    // route against baseURL keeps every scan on a real route, and the
    // ok() check below makes any non-200 fail loudly instead.
    const url = new URL(route.replace(/^\//, ''), baseURL);
    console.log(`[axe:scan] ${url.href}`);
    const response = await page.goto(url.href, { waitUntil: 'networkidle' });
    expect(
      response?.ok(),
      `non-200 on ${url.href}: HTTP ${response?.status()}`,
    ).toBeTruthy();

    const results = await new AxeBuilder({ page }).analyze();

    const lesser = results.violations.filter(
      (violation) => violation.impact !== 'serious' && violation.impact !== 'critical',
    );
    if (lesser.length > 0) {
      console.warn(`[axe:report-only] ${url.href}: ${JSON.stringify(lesser.map(summarize))}`);
    }

    const gate = results.violations.filter(
      (violation) => violation.impact === 'serious' || violation.impact === 'critical',
    );
    expect(
      gate.map(summarize),
      `serious/critical axe violations on ${url.href}:\n${JSON.stringify(
        gate.map((violation) => ({
          ...summarize(violation),
          targets: violation.nodes.slice(0, 3).map((node) => node.target),
        })),
        null,
        2,
      )}`,
    ).toEqual([]);
  });
}
