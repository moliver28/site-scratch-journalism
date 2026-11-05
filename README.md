# Scratch Journalism Site

Investigative reporting site built with [sitefactory](https://github.com/moliver28/sitefactory)
(journalism template v0.1.0, @moliver28/theme 0.6.0).

- Live: https://moliver28.github.io/site-scratch-journalism/
- PR previews: `https://moliver28.github.io/site-scratch-journalism/pr-preview/pr-<n>/`

## Structure

| Path | What it is |
| --- | --- |
| `src/content/entities/` | Entity YAML (people, organisations, events, places) |
| `src/content/edges/` | Typed, evidence-cited relations between entities |
| `src/content/pages/` | Narrative pages (markdown) |
| `src/content/custom-entities/` | Fast path for brand-new entity kinds |
| `src/components/DiscoveryHead.astro` | Reader-discovery head tags (OG/Twitter cards, JSON-LD) |
| `src/rss/rss.xml.ts` | RSS feed endpoint (dated pages, newest first; routed only when `discovery.rss` is on) |
| `static/evidence/` | Source documents, referenced by content |
| `static/admin/` | Sveltia CMS (staff-only, `/admin/`) |
| `vendor/theme/` | Vendored `@moliver28/theme` (pinned via `site.config.yaml`) |
| `site.config.yaml` | Machine-readable site identity for factory tooling |
| `.github/workflows/monitor.yml` | Weekly link check of the deployed site (opens an issue on failure) |
| `AGENTS.md` | Editorial + agent rules (read before writing content) |

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

The lockfile is a mechanical companion: when an update changes dependency
lines in `package.json`, the matching `package-lock.json` diff is expected
update output, not drift — keep it in the same commit or `npm ci` fails in
CI. See sitefactory's `AGENTS.md` ("Package conventions") for the full
update procedure.
