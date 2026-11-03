/**
 * Best-fit preset matcher (plan P6.4) — public API typed in ./match.d.ts.
 *
 * Scores every preset in `tokens/presets/` (discovered via listPresets, the
 * same mechanism as ./preset.js) against a site intake and returns a
 * deterministic ranked list: score descending, ties broken by preset id in
 * UTF-16 code-unit order. Deterministic means no randomness, no clock, no
 * locale-dependent comparison — the same intake always yields the identical
 * list.
 *
 * The intake schema (all fields optional; unknown fields ignored):
 *
 *   {
 *     vertical?:   string           // e.g. "trades"; matched against the
 *                                   // preset's verticals, case/trim-insensitive
 *     mood_words?: string[]         // e.g. ["bold", "friendly"]; each DISTINCT
 *                                   // token equal to the preset's `mood`
 *                                   // attribute scores +1
 *     constraints?: {               // attribute -> expected value(s); each
 *       [attribute]: string | string[]  // satisfied constraint scores +1
 *     }
 *   }
 *
 * Scoring: vertical hit +2, each mood hit +1, each satisfied constraint +1.
 * Nothing is ever filtered — the caller always gets the full ranked menu,
 * so a near-miss is visible instead of a silent empty result. With an empty
 * intake every preset scores 0 and the list is plain id order; callers that
 * need a guaranteed fallback should use DEFAULT_PRESET from ./preset.js.
 *
 * `constraints` keys are matched against the catalog taxonomy attributes
 * (palette_type, type_pairing, density, mood, motion — see
 * ops/catalog/themes.yaml). These attributes are DESCRIPTIVE seed-derived
 * character metadata (momus P6.3 rider), not behavior promises.
 *
 * Shipped as JS with a hand-written declaration: the theme's typecheck has
 * no @types/node (this module reads the presets dir), and astro check
 * skips .js files. Vendored under templates/journalism/template/vendor/
 * theme/config/match.js — the vendored-mirror parity test fails CI if the
 * copies drift.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { listPresets } from './preset.js';

function defaultPresetsDir() {
  return fileURLToPath(new URL('../tokens/presets', import.meta.url));
}

/** Equality normalization for intake/meta string matching: trim + lowercase. */
function norm(value) {
  return String(value).trim().toLowerCase();
}

function readMeta(presetsDir, id) {
  return parseYaml(readFileSync(path.join(presetsDir, id, 'meta.yaml'), 'utf8'));
}

/**
 * Rank presets for an intake. @returns Array<{id, title, score}> — one entry
 * per preset, best fit first; see the module JSDoc for the intake schema.
 */
export function matchPresets(intake = {}, options = {}) {
  const presetsDir = options.presetsDir ?? defaultPresetsDir();
  const vertical = typeof intake.vertical === 'string' ? norm(intake.vertical) : null;
  const moodWords = [
    ...new Set(
      (Array.isArray(intake.mood_words) ? intake.mood_words : [])
        .filter((word) => typeof word === 'string')
        .map(norm)
        .filter(Boolean),
    ),
  ];
  const constraints =
    intake.constraints && typeof intake.constraints === 'object' && !Array.isArray(intake.constraints)
      ? intake.constraints
      : {};

  return listPresets(presetsDir)
    .map((id) => {
      const meta = readMeta(presetsDir, id);
      let score = 0;

      if (vertical && Array.isArray(meta.verticals) && meta.verticals.some((v) => norm(v) === vertical)) {
        score += 2;
      }

      const mood = meta.attributes?.mood != null ? norm(meta.attributes.mood) : null;
      for (const word of moodWords) {
        if (word === mood) score += 1;
      }

      for (const [attribute, expected] of Object.entries(constraints)) {
        const actual = meta.attributes?.[attribute];
        if (actual == null) continue;
        const expectedList = Array.isArray(expected) ? expected : [expected];
        if (expectedList.some((candidate) => norm(candidate) === norm(actual))) score += 1;
      }

      return { id, title: meta.title ?? id, score };
    })
    .sort((a, b) => b.score - a.score || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}
