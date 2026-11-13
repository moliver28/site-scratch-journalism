# Scratch Journalism Site — Editorial & Agent Rules (journalism vertical)

Layering: global `~/.zcode/AGENTS.md` → sitefactory factory `AGENTS.md` → this file
→ Zod schemas in `src/content.config.ts` (machine-enforced).

## Schema pack

The content model (collections, schemas, admin config) is emitted from the
site's schema-pack, selected at scaffold time. It is not hand-edited:
schema changes go through the template — and a new vertical is a new pack
there, never a template fork (template `packs/README.md`).

## Journalism rules (binding for humans and agents)

1. **Privacy first.** Never publish private individuals' personal data (home
   addresses, phone numbers, identity documents) without documented consent.
   Public officials acting in public capacity are fair game with source cited.
2. **Evidence or silence.** Every entity and edge should cite evidence paths
   under `static/evidence/` (or external URLs). Unverified claims carry
   `confidence: low` and are labeled on render: low-confidence edges get an
   "Unverified" badge in the graph (edge tooltip and entity list), and a
   `confidence: low` field on an entity renders as an "Unverified" chip.
3. **Secure tips.** Tip-line submissions are raw input, never content. Redact,
   verify, and cite before anything becomes an entity, edge, or page.
4. **No third-party scripts on reader-facing pages.** Zero trackers, zero
   fonts-by-CDN, zero analytics (`site.config.yaml` pins `analytics: none`).
   The single exception is `/admin/` (Sveltia CMS), which is staff-only and
   `noindex`; it is never linked from content pages.
5. **Corrections over deletion.** Fix facts in place; keep entity ids stable —
   edges reference them.

## Content model

- `src/content/entities/*.yaml` (`*.yml` also accepted) — people,
  organisations, events, places. Known fields: `name`, `type`, `summary`.
  Everything else is free-form; the theme renders unknown fields
  automatically (no component code changes).
- `src/content/edges/*.yaml` — typed relations: `from`, `to`, `kind`,
  `evidence` (paths/URLs), `confidence` (high|medium|low). `from`/`to` must be
  existing entity or custom-entity ids — the build fails on dangling
  references.
- `src/content/pages/*.md` — narrative pages (frontmatter: `title`,
  `description`, `order`; optional `date:` — dated pages join the RSS feed
  and get a `datePublished` in their Article JSON-LD).
- `src/content/custom-entities/*.yaml` (`*.yml` also accepted) — fast path
  for a brand-new entity
  kind: any shape with `name` + `kind`; rendered by the generic list/detail
  routes at `/custom-entities/`, and included in `graph.json` as nodes (kind
  from the `kind` field). Entity-ref fields resolve across both collections —
  prefer `entities`, fall back to `custom-entities` — so a ref to a
  custom-entity id links to `/custom-entities/<id>/`. Promote to a
  first-class type via a template release PR when a kind stabilizes.

## Content schema (read before writing)

Schema ownership is split (sitefactory ADR #85): `src/content.config.ts` is
the TEMPLATE-owned core — `copier recopy` overwrites it, so never edit it.
`src/content.extensions.ts` is the CLIENT-owned seam — the one schema file
this repo edits (it survives every recopy; the core imports and applies it).
Read both — including every `.catchall` rule — before writing any entity,
edge, or page:

- Known fields are typed and Zod-validated: wrong types or missing required
  fields fail the build (`npm run build` runs validation first).
- Unknown fields on `entities`, `edges`, and `custom-entities` pass through
  `.catchall(z.unknown())` and are rendered by the theme's generic fallback
  renderers. Adding new data fields — or fields on a new entity/edge kind —
  requires **zero component code changes**: add the field to the YAML and it
  appears on the site.
- The `pages` schema is typed (`title`, `description`, `order`). Unlike the
  YAML collections it carries no catchall unless this repo's schema adds one
  (some migrated sites do, so legacy frontmatter survives validation instead
  of being stripped). Trust the schema files in this repo over this summary —
  and trust the core; the extensions file is yours. A stub entry whose key
  matches a pack collection replaces it; a new key adds a collection.

Content-only PRs must never modify `src/content.config.ts`,
`src/content.extensions.ts`, `src/pages/**`, `vendor/theme/**`, `.github/**`,
or `package.json` — schema (core or seam), routes, theme, and CI change only
through code PRs, which always require human review.

## Reader discovery (default ON; moliver28/sitefactory#72)

The site ships a sitemap (`sitemap-index.xml`), an RSS feed (`/rss.xml`,
dated pages only), Open Graph + Twitter cards, and JSON-LD (`Article` on
article pages, `WebSite` on the home page — no `SearchAction`, there is no
search). Head tags render via `src/components/DiscoveryHead.astro` into the
theme layout's `head-extra` slot; all four features gate on the optional
`discovery:` block in `site.config.yaml` — set a key to `false` to opt out
at the next build; unknown keys fail the build. There is deliberately no
`og:image`: the template ships no social image asset, and inventing binary
assets is not the template's job. The feed's `<language>` comes from the
optional top-level `language:` key in `site.config.yaml` (BCP-47; default
`en-us`).

## Post-publish link monitor (moliver28/sitefactory#79)

`.github/workflows/monitor.yml` runs weekly (Mondays 13:00 UTC) and
lychee-checks the DEPLOYED site — input is the deployed `sitemap-0.xml`
(the PR-time linkcheck in ci.yml gates the build instead). The invocation
is composed by `scripts/monitor-args.cjs` from `site.config.yaml`; the same
optional `linkcheck:` policy block governs both gates, and the SSRF flags
(`--exclude-all-private`) are not configurable. Failures open
`[monitor] broken links <run-date>` issues (body capped at 100 report
lines; full report as a run artifact; a same-date re-run comments on the
open issue rather than duplicating). GitHub disables scheduled workflows on
repos with 60 days of no activity — any push resets that clock.

## Publishing contract (agents)

- Branches: `agent/(feat|fix|chore|docs)/<kebab-slug>` (e.g.
  `agent/feat/river-timeline`); PRs only; `main` is protected. Humans
  follow the same pattern with a `human/` prefix.
- Commits: Conventional Commits — `content:` prefix for content changes
  (e.g. `content: add river case edges`); `feat:`, `fix:`, `docs:`,
  `chore:` for code and docs.
- A content-only PR contains exactly: `src/content/**`, `static/evidence/**`,
  URL stubs under `static/` (meta-refresh redirects preserving legacy URLs),
  and `README.md`. Nothing else.
- Never in a content-only PR: code, config (`site.config.yaml`,
  `astro.config.mjs`, `static/admin/**`), schema (`src/content.config.ts` or
  the client-owned `src/content.extensions.ts`), theme (`vendor/theme/**`),
  workflows (`.github/**`), `package.json`, or lockfiles. A PR mixing
  content with code/config must be split into separate PRs.
- Evidence files are immutable source documents: add them under
  `static/evidence/<case-slug>/` exactly as received (byte-identical copies
  — no reformatting, no re-encoding); research/audit notes go under
  `static/evidence/<case-slug>/research-notes/`. Never edit, rename, or
  delete published evidence — corrections go in content, not evidence.
  Reference evidence by site-rooted paths (`/evidence/…`) — the renderer
  links them as-is.
- Content-only PRs may auto-merge when gates are green (CI validates all
  content via Zod at build). Schema, theme, workflow, or config changes
  always require human review.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (Zod validation fails the build on bad data)
- `npm run typecheck` — astro check
- Link check: the optional `linkcheck:` block in `site.config.yaml` (`exclude_domains`, `accept`) is the client-editable, declarative, auditable flakiness policy for bot-blocked external domains; internal links are always strict.
- Deploys: push to `main` → GitHub Pages at `https://moliver28.github.io/site-scratch-journalism/`;
  PRs get previews at `/pr-<n>/` (auto-cleaned on merge).
