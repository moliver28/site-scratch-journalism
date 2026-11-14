/**
 * Pre-build friendly notice for empty content collections (sitefactory
 * issue #119, the deferred Astro-level residual from #14).
 *
 * Astro's glob loader emits one raw warning per content collection that
 * resolves zero entries —
 *   [WARN] [glob-loader] The base directory ".../src/content/<name>\" does not exist.
 * — and every collection starts empty on a fresh scaffold (the template
 * ships no content, #49) or on a migrated site that has not filled one yet.
 * The warning is BENIGN (the build succeeds), but raw, repeated and
 * unexplained. Astro 7.4.x ships no loader opt-out (verified against the
 * 7.4.4 source during #14's closure), so this script — wired as npm's
 * `prebuild` lifecycle in package.json — runs BEFORE astro build, names the
 * empty collections, and says the warning is expected.
 *
 * Zero-output contract: when every collection has content, this script
 * prints NOTHING and exits 0 — the build log upstream of `astro build` is
 * byte-identical to an un-wired build. It is a notice, never a gate: it
 * never fails the build and never writes to dist.
 *
 * Collections are derived from the RENDERED src/content.config.ts (the
 * glob loader `pattern` + `base` pairs), so pack-driven config shapes need
 * no script changes. Extension matching approximates the loader's glob
 * (the three shapes the template emits: brace sets like {yaml,yml}, and
 * the single-extension yaml / md forms); an unparseable pattern is skipped
 * silently rather than misreported.
 *
 * Shipped as .cjs because `astro check` skips CommonJS files, and as a
 * standalone file with no sibling requires so tests can load it straight
 * from the template tree.
 */
const { existsSync, readdirSync, readFileSync } = require('node:fs');
const path = require('node:path');

/**
 * Extract `{ base, pattern }` pairs from the rendered content config.
 * Splits on `glob(` loader openings and takes the first quoted `pattern:`
 * and `base:` in each region — the shape every template-emitted collection
 * loader uses (`loader: glob({ pattern: '…', base: '…', … })`).
 */
function collectGlobs(configSrc) {
  const regions = configSrc.split(/glob\s*\(/);
  const globs = [];
  for (let i = 1; i < regions.length; i++) {
    // String.split leaves the text BETWEEN matches in regions[1..]: each
    // region runs from just after its `glob(` up to just before the next
    // one (or end of file), so this region's FIRST quoted `pattern:` +
    // `base:` pair belongs to this loader block.
    const region = regions[i];
    const pattern = region.match(/pattern:\s*['"]([^'"]+)['"]/);
    const base = region.match(/base:\s*['"]([^'"]+)['"]/);
    if (pattern && base) globs.push({ pattern: pattern[1], base: base[1] });
  }
  return globs;
}

/** The file extensions a loader pattern matches (the template's three forms). */
function extensionsFromPattern(pattern) {
  const brace = pattern.match(/\{([A-Za-z0-9,]+)\}/);
  if (brace) return brace[1].split(',');
  const single = pattern.match(/\.([A-Za-z0-9]+)$/);
  return single ? [single[1]] : [];
}

/** Recursively count files under `dir` whose extension is in `exts`. */
function countMatchingFiles(dir, exts) {
  let count = 0;
  if (!existsSync(dir)) return 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countMatchingFiles(full, exts);
    else if (exts.some((ext) => entry.name.toLowerCase().endsWith(`.${ext.toLowerCase()}`))) count++;
  }
  return count;
}

/**
 * The collections (relative to `siteRoot`) that resolve zero entries.
 * Returns [] when every collection has content, when the config is absent,
 * or when a pattern cannot be parsed (never misreport; see file header).
 */
function emptyCollections(siteRoot, configSrc) {
  if (!configSrc) return [];
  const siteRootResolved = path.resolve(siteRoot);
  const empty = [];
  for (const { pattern, base } of collectGlobs(configSrc)) {
    const exts = extensionsFromPattern(pattern);
    if (exts.length === 0) continue;
    const baseDir = path.resolve(siteRootResolved, base.replace(/^\.\//, ''));
    if (countMatchingFiles(baseDir, exts) === 0) {
      empty.push({ pattern, base, name: path.basename(baseDir) });
    }
  }
  return empty;
}

/** The friendly notice block, or '' when nothing is empty (zero-output). */
function buildNotice(siteRoot, configSrc) {
  const empty = emptyCollections(siteRoot, configSrc);
  if (empty.length === 0) return '';
  const lines = empty.map((c) => `  - ${c.name}  (${c.base}, pattern ${c.pattern})`);
  return [
    `[sitefactory] notice: ${empty.length} content collection${empty.length === 1 ? '' : 's'} currently resolve ZERO entries:`,
    ...lines,
    '',
    'Astro\'s glob loader will WARN about each of these during this build.',
    'That warning is expected on fresh scaffolds and migrated sites and does',
    'NOT fail the build. Add files under the listed folders to fill a',
    'collection — the notice and the warning disappear on their own.',
    '',
  ].join('\n');
}

/**
 * Run as the prebuild hook: load the rendered config, print, exit 0.
 *
 * "Never fails the build" is STRUCTURAL (momus P2 rider on #132): the whole
 * body is guarded, so ANY fs error along the way — an unreadable or
 * vanished tree (EACCES/EMFILE from readdirSync/readFileSync) included —
 * skips the notice silently. A degraded environment must degrade the
 * notice, never the build: the scan is best-effort, and misreporting or
 * crashing over it would be worse than staying quiet.
 */
function main() {
  try {
    const siteRoot = path.resolve(__dirname, '..');
    const configPath = path.join(siteRoot, 'src', 'content.config.ts');
    const configSrc = existsSync(configPath) ? readFileSync(configPath, 'utf8') : '';
    const notice = buildNotice(siteRoot, configSrc);
    if (notice) console.log(notice);
  } catch {
    // Silent skip: see the docstring above.
  }
}

module.exports = { collectGlobs, extensionsFromPattern, countMatchingFiles, emptyCollections, buildNotice };

if (require.main === module) main();
