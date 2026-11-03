import { defineConfig } from '@playwright/test';

/**
 * Accessibility gate runner (tests/e2e/gates.spec.ts).
 * The webServer serves the BUILT site at its GitHub Pages base path — run
 * `npm run build` first (CI's quality job always does).
 */
export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    // 127.0.0.1, not localhost: avoids ::1-first resolution edges between
    // the preview server binding and the browser.
    baseURL: 'http://127.0.0.1:4321/site-scratch-journalism/',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321/site-scratch-journalism/',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
