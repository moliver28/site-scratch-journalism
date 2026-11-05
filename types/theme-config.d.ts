/**
 * Ambient declaration for the theme's preset loader, per issue #26 F10: the
 * module ships as plain JS with no hand-written .d.ts (the deleted
 * preset.d.ts duplicated preset.js signatures and could only drift), so the
 * site's `astro check` needs this shorthand to stay at zero diagnostics.
 * Shorthand = the import is any-typed, on purpose: no second copy of the
 * signatures lives here to fall out of sync with
 * vendor/theme/config/preset.js.
 */
declare module '@moliver28/theme/config/preset';
