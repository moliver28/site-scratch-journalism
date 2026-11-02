# Scratch Journalism Site

Investigative reporting site built with [sitefactory](https://github.com/moliver28/sitefactory)
(journalism template v0.1.0, @moliver28/theme 0.2.0).

- Live: https://moliver28.github.io/site-scratch-journalism/
- PR previews: `https://moliver28.github.io/site-scratch-journalism/pr-preview/pr-<n>/`

## Structure

| Path | What it is |
| --- | --- |
| `src/content/entities/` | Entity YAML (people, organisations, events, places) |
| `src/content/edges/` | Typed, evidence-cited relations between entities |
| `src/content/pages/` | Narrative pages (markdown) |
| `src/content/custom-entities/` | Fast path for brand-new entity kinds |
| `static/evidence/` | Source documents, referenced by content |
| `static/admin/` | Sveltia CMS (staff-only, `/admin/`) |
| `vendor/theme/` | Vendored `@moliver28/theme` (pinned via `site.config.yaml`) |
| `site.config.yaml` | Machine-readable site identity for factory tooling |
| `AGENTS.md` | Editorial + agent rules (read before writing content) |

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # validates content (Zod) and builds
npm run typecheck  # astro check
```

## Updating the theme

The theme is vendored (`file:./vendor/theme`) and pinned in `site.config.yaml`.
Theme updates ship as a new `@moliver28/theme` version; update `vendor/theme`
to that version and let CI rebuild. See sitefactory's `AGENTS.md` for the
update procedure.
