/**
 * Ambient declarations for the theme's plain-JS config modules, per issue
 * #26 F10: the modules ship as plain JS with no hand-written .d.ts (the
 * deleted preset.d.ts duplicated preset.js signatures and could only
 * drift), so the site's `astro check` needs these shorthands to stay at
 * zero diagnostics. Shorthand = the import is any-typed, on purpose: no
 * second copy of the signatures lives here to fall out of sync with
 * vendor/theme/config/*.js.
 */
declare module '@moliver28/theme/config/preset';
declare module '@moliver28/theme/config/pages';
