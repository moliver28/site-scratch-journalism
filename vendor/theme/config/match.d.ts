/**
 * Public API of ./match.js (runtime implementation; see that file for the
 * mechanism and the full intake schema JSDoc).
 */

/** One ranked row: best fit first, score desc, tie-break by preset id. */
export interface RankedPreset {
  id: string;
  title: string;
  /** vertical hit +2; each mood-word hit +1; each satisfied constraint +1. */
  score: number;
}

/**
 * Site intake (all fields optional). `vertical` matches a preset's verticals;
 * `mood_words` tokens match the preset `mood` attribute; `constraints` entries
 * match taxonomy attributes (palette_type, type_pairing, density, mood,
 * motion) against a value or list of accepted values.
 */
export interface PresetIntake {
  vertical?: string;
  mood_words?: string[];
  constraints?: Record<string, string | string[]>;
}

export interface MatchOptions {
  /** Presets dir override for tests and non-standard installs. */
  presetsDir?: string;
}

/** Deterministic ranked list of every preset (never filtered): score desc, tie-break id asc. */
export function matchPresets(intake?: PresetIntake, options?: MatchOptions): RankedPreset[];
