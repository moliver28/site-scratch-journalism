/**
 * Public API of ./preset.js (runtime implementation; see that file for the
 * mechanism). Kept as a declaration because the implementation is JS.
 */
import type { ZodType } from 'astro/zod';

export const DEFAULT_PRESET: 'journalism-default';
/** Static specifier BaseLayout imports; sites alias it to the active preset. */
export const ACTIVE_CSS_SPECIFIER: '@moliver28/theme/tokens/active.css';

export interface ResolveOptions {
  /** Site root holding `site.config.yaml` (default: process cwd). */
  siteRoot?: string;
  /** Presets dir override for tests and non-standard installs. */
  presetsDir?: string;
}

export interface ResolvedPreset {
  preset: string;
  /** Absolute path to the active preset's tokens.css. */
  cssPath: string;
}

/** Preset ids present on disk: subdirectories containing both tokens.css and meta.yaml. */
export function listPresets(presetsDir?: string): string[];

/** Site config schema: `theme_preset` validated against the presets dir; all other factory fields pass through. */
export function siteConfigSchema(presetsDir?: string): ZodType<{ theme_preset: string } & Record<string, unknown>>;

/** Active preset for a site: config field, or the default when unset. */
export function resolveThemePreset(options?: ResolveOptions): ResolvedPreset;

/** `vite` fragment for `astro.config.mjs`: alias the active preset's tokens over BaseLayout's default import. */
export function applyThemePreset(options?: ResolveOptions): {
  vite: { resolve: { alias: Array<{ find: string; replacement: string }> } };
};
