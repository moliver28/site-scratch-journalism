/**
 * Theme-preset resolution (plan P6.1) — public API typed in ./preset.d.ts.
 *
 * Reads `site.config.yaml` (`theme_preset` field), Zod-validates it against
 * the presets actually present in `tokens/presets/` (each = `tokens.css` +
 * `meta.yaml`), and returns the Vite alias that points BaseLayout's
 * `@moliver28/theme/tokens/active.css` import at the chosen preset file.
 *
 * Called from the site's `astro.config.mjs` at config-load time, so an
 * unknown preset fails the build before anything renders. Swapping presets
 * is one config field + rebuild (P6.5).
 *
 * Shipped as JS with a hand-written declaration: the theme's typecheck has
 * no @types/node (adding it would be a lockfile change; this module is the
 * only one touching Node builtins), and `astro check` skips .js files.
 *
 * `yaml` and `astro/zod` are re-used from Astro's own dependency tree; the
 * theme never declares them directly (same pattern as `astro/zod` in the
 * sites' content.config.ts).
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

export const DEFAULT_PRESET = 'journalism-default';
/** Static specifier BaseLayout imports; sites alias it to the active preset. */
export const ACTIVE_CSS_SPECIFIER = '@moliver28/theme/tokens/active.css';

function defaultPresetsDir() {
  return fileURLToPath(new URL('../tokens/presets', import.meta.url));
}

/**
 * Preset ids present on disk: subdirectories containing BOTH tokens.css and
 * meta.yaml (P6.1 spec: a preset is a full look plus its identity card).
 * A dir with tokens.css but no meta.yaml is not a preset — offering it in
 * `site.config.yaml` would break catalog-driven flows (issue #26 F4).
 */
export function listPresets(presetsDir = defaultPresetsDir()) {
  return readdirSync(presetsDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(path.join(presetsDir, entry.name, 'tokens.css')) &&
        existsSync(path.join(presetsDir, entry.name, 'meta.yaml')),
    )
    .map((entry) => entry.name)
    .sort();
}

/** Site config schema: `theme_preset` validated against the presets dir; all other factory fields pass through. */
export function siteConfigSchema(presetsDir = defaultPresetsDir()) {
  return z
    .object({
      theme_preset: z.enum(listPresets(presetsDir)).default(DEFAULT_PRESET),
    })
    .catchall(z.unknown());
}

function loadSiteConfig(siteRoot, presetsDir) {
  const file = path.join(siteRoot, 'site.config.yaml');
  if (!existsSync(file)) return { theme_preset: DEFAULT_PRESET };
  const raw = parseYaml(readFileSync(file, 'utf8'));
  return siteConfigSchema(presetsDir).parse(raw ?? {});
}

/** Active preset for a site: config field, or the default when unset. */
export function resolveThemePreset(options = {}) {
  const presetsDir = options.presetsDir ?? defaultPresetsDir();
  const siteRoot = options.siteRoot ?? process.cwd();
  const { theme_preset } = loadSiteConfig(siteRoot, presetsDir);
  return { preset: theme_preset, cssPath: path.join(presetsDir, theme_preset, 'tokens.css') };
}

/** `vite` fragment for `astro.config.mjs`: alias the active preset's tokens over BaseLayout's default import. */
export function applyThemePreset(options = {}) {
  const { cssPath } = resolveThemePreset(options);
  return {
    vite: {
      resolve: {
        alias: [{ find: ACTIVE_CSS_SPECIFIER, replacement: cssPath }],
      },
    },
  };
}
