# Scratch Journalism Site

Investigative reporting site built with [sitefactory](https://github.com/moliver28/sitefactory)
(journalism template v0.1.0, @moliver28/theme 0.8.0).

- Live: https://moliver28.github.io/site-scratch-journalism/
- PR previews: `https://moliver28.github.io/site-scratch-journalism/pr-preview/pr-<n>/`

## Structure

| Path | What it is |
| --- | --- |
| `src/content/entities/` | Entity YAML (people, organisations, events, places) |
| `src/content/edges/` | Typed, evidence-cited relations between entities |
| `src/content/pages/` | Narrative pages (markdown) |
| `src/content/custom-entities/` | Fast path for brand-new entity kinds |
| `src/content.extensions.ts` | YOUR schema extensions — the one schema file you edit (survives every recopy) |
| `src/components/DiscoveryHead.astro` | Reader-discovery head tags (OG/Twitter cards, JSON-LD) |
| `src/rss/rss.xml.ts` | RSS feed endpoint (dated pages, newest first; routed only when `discovery.rss` is on) |
| `static/evidence/` | Source documents, referenced by content |
| `static/admin/` | Sveltia CMS (staff-only, `/admin/`) |
| `vendor/theme/` | Vendored `@moliver28/theme` (pinned via `site.config.yaml`) |
| `site.config.yaml` | Machine-readable site identity for factory tooling |
| `.github/workflows/monitor.yml` | Weekly link check of the deployed site (opens an issue on failure) |
| `AGENTS.md` | Editorial + agent rules (read before writing content) |

## Schema pack

This site's content model is emitted from the journalism schema-pack (the
`pack` answer recorded in `.copier-answers.yml`). Site owners never touch
packs. Template-side authors: a new vertical is a new pack in the template's
`packs/` directory — **never a template fork** (see the template's
`packs/README.md` for the pack contract, the graph axis (#83), and the
author checklist portfolio followed as vertical #2). Boundary to know: the
factory's render CI proves EMISSION shape for every pack and BUILD + gates
for the shipped ones (journalism via render-smoke, portfolio via the
`portfolio-smoke` leg); a reshaped or new pack whose emitted collections
don't satisfy the pages' `getCollection` calls still surfaces at
`astro check`/build in the site repo, so run the site's own gates before
shipping a reshaped pack.

## Client-owned schema extensions (sitefactory ADR #85)

`src/content.config.ts` is TEMPLATE-owned: `copier recopy -l -w` overwrites
it on every template update, so never edit it — that is how site-local schema
guards get silently reverted (#50). Site-local schema customizations live in
**`src/content.extensions.ts`** — the one schema file you own. It is created
with the site, imported and applied by the core config, and copier is
structurally unable to rewrite it once it exists (`_skip_if_exists`), so your
customizations survive every recopy and update.

The file ships as an empty record; an unused seam changes nothing. Entries
are keyed by collection name:

```ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const extensions: Record<string, ReturnType<typeof defineCollection>> = {
  // REPLACE a pack collection: re-assert it (copy the core definition from
  // src/content.config.ts, then modify — e.g. a stricter pages schema).
  // ADD a collection: use a new key.
  documents: defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/documents' }),
    schema: z.object({ name: z.string() }).catchall(z.unknown()),
  }),
};
```

Boundaries: the Sveltia admin config (`static/admin/`) is pack-emitted — a
client-added collection gets no admin UI until upstreamed; and vertical-wide
models belong in the schema-pack (a template PR), not the seam. If a seam
tweak proves universal, upstream it into the pack so every site inherits it.

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # validates content (Zod) and builds
npm run typecheck  # astro check
```

External-link check: the optional `linkcheck:` block in `site.config.yaml` (`exclude_domains`, `accept`) is the client-editable, declarative, auditable flakiness policy for bot-blocked external domains; internal links are always strict.

## Reader discovery

On by default: XML sitemap (`sitemap-index.xml`), RSS feed (`/rss.xml` —
pages with a `date:` frontmatter field, newest first), Open Graph + Twitter
cards, and JSON-LD (`Article` on article pages, `WebSite` on the home
page). No `og:image` is emitted — the template ships no social image; to
get image preview cards, add `static/social-card.png` plus an `og:image`
tag in `src/components/DiscoveryHead.astro`. Opt any part out in
`site.config.yaml` (unknown keys fail the build loudly):

```yaml
discovery:
  sitemap: false # also degrades the weekly monitor to homepage-only checks
  rss: false
  opengraph: false
  jsonld: false
```

The RSS feed's `<language>` comes from the optional top-level `language:`
key in `site.config.yaml` (BCP-47 tag, e.g. `de-DE`); it defaults to
`en-us`.

## Post-publish link monitor

`.github/workflows/monitor.yml` runs lychee against the deployed site every
Monday 13:00 UTC (input: the deployed `sitemap-0.xml`, so every page gets
checked; SSRF-safe; the `linkcheck:` policy block above applies here too).
On failure it opens one GitHub issue per run date, titled
`[monitor] broken links <date>`, body capped at the first 100 report lines
with the full report as a run artifact; a same-date re-run updates the open
issue instead of duplicating it. Note: GitHub disables scheduled workflows
after 60 days without repo activity (you get an email when that happens) —
any push resets the clock.

## Updating the theme

The theme is vendored (`file:./vendor/theme`) and pinned in `site.config.yaml`.
Theme updates ship as a new `@moliver28/theme` version; update `vendor/theme`
to that version and let CI rebuild. `copier recopy` never adopts changed
`copier.yml` defaults, so the version bump takes TWO passes:

```sh
copier recopy -l -w
copier recopy -l -w -d theme_version=<new>
```

The recopy rewrites everything the template owns EXCEPT your
`src/content.extensions.ts` (see "Client-owned schema extensions" above):
template-owned files update; your schema extensions stay put.

The lockfile is a mechanical companion: when an update changes dependency
lines in `package.json`, the matching `package-lock.json` diff is expected
update output, not drift — keep it in the same commit or `npm ci` fails in
CI. See sitefactory's `AGENTS.md` ("Package conventions") for the full
update procedure.
