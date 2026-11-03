import { readdirSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility gate for generated sites (issue #4 / P7.2 S2).
 *
 * Route discovery walks `src/content/` with node:fs — no Astro runtime —
 * so the gate fails loudly if collections move. A floor assertion keeps
 * vacuous discovery (empty/missing collections) from passing.
 *
 * axe serious/critical violations fail the gate; moderate/minor issues are
 * report-only (console.warn) to keep failures actionable, not noisy.
 * Scans run after `networkidle` so client-rendered content is present.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');

/** Filename stems of a content collection (route ids derive from file names). */
function collectionStems(dir: string, extensions: string[]): string[] {
  try {
    return readdirSync(path.join(CONTENT_ROOT, dir))
      .filter((file) => extensions.some((ext) => file.endsWith(ext)))
      .map((file) => path.basename(file, path.extname(file)))
      .sort();
  } catch {
    return []; // missing collection directory → the floor assertion reports it
  }
}

const entityRoutes = collectionStems('entities', ['.yaml', '.yml']).map((id) => `/entities/${id}/`);
const pageRoutes = collectionStems('pages', ['.md']).map((id) => `/pages/${id}/`);

// Discovery here is FLAT (one directory level); the content collections
// glob '**/*' recursively. When #33 extends this file, walk recursively —
// until then nested collection files are scanned via LHCI autodiscovery
// (scripts/lighthouserc.cjs), not here.

test('route discovery finds real content (floor)', () => {
  expect(
    entityRoutes.length,
    `expected >=2 entities under src/content/entities, found: ${entityRoutes.join(', ') || '(none)'}`,
  ).toBeGreaterThanOrEqual(2);
  expect(
    pageRoutes.length,
    `expected >=1 page under src/content/pages, found: ${pageRoutes.join(', ') || '(none)'}`,
  ).toBeGreaterThanOrEqual(1);
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
