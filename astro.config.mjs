import { defineConfig } from 'astro/config';

// GitHub Pages project site: served at /site-scratch-journalism/ — every internal URL must
// respect the base path. The theme's graph island fetches `${import.meta.env.BASE_URL}graph.json`
// via the default `src` prop only when the site is rooted; this site sets src explicitly.
export default defineConfig({
  site: 'https://moliver28.github.io',
  base: '/site-scratch-journalism/',
});
