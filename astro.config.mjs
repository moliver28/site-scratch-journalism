import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { resolveDiscovery } from './src/lib/discovery';
import { applyThemePreset } from '@moliver28/theme/config/preset';

// GitHub Pages project site: served at /site-scratch-journalism/ — every internal URL must
// respect the base path. The theme's graph island fetches `${import.meta.env.BASE_URL}graph.json`
// via the default `src` prop only when the site is rooted; this site sets src explicitly.
// Reader-discovery gates (P9 UX F3) resolve from the same file; with the
// defaults, @astrojs/sitemap emits sitemap-index.xml + sitemap-0.xml whose
// URLs include the base path.
const discovery = resolveDiscovery();

export default defineConfig({
  site: 'https://moliver28.github.io',
  base: '/site-scratch-journalism/',
  // Evidence files, Sveltia admin, and uploads live in static/ (journalism
  // convention) — point Astro's public dir at it or nothing gets deployed.
  publicDir: 'static',
  // Reader-discovery gates (opt out with `discovery: { ...: false }` in
  // site.config.yaml; defaults on): sitemap emits sitemap-index.xml +
  // sitemap-0.xml; the RSS feed endpoint (src/rss/rss.xml.ts, outside
  // src/pages so Astro never auto-routes it) is injected only when
  // discovery.rss is on — an unemitted route beats a stale feed file.
  integrations: [
    ...(discovery.sitemap ? [sitemap()] : []),
    {
      name: 'rss-feed-route',
      hooks: {
        'astro:config:setup': ({ injectRoute }) => {
          if (discovery.rss) {
            injectRoute({ pattern: '/rss.xml', entrypoint: './src/rss/rss.xml.ts', prerender: true });
          }
        },
      },
    },
  ],
  // Resolves `theme_preset` from site.config.yaml and aliases the theme's
  // tokens import to that preset (unknown ids fail the build here).
  vite: applyThemePreset().vite,
});
