# Scratch Journalism Site — Editorial & Agent Rules (journalism vertical)

Layering: global `~/.zcode/AGENTS.md` → sitefactory factory `AGENTS.md` → this file
→ Zod schemas in `src/content.config.ts` (machine-enforced).

## Journalism rules (binding for humans and agents)

1. **Privacy first.** Never publish private individuals' personal data (home
   addresses, phone numbers, identity documents) without documented consent.
   Public officials acting in public capacity are fair game with source cited.
2. **Evidence or silence.** Every entity and edge should cite evidence paths
   under `static/evidence/` (or external URLs). Unverified claims carry
   `confidence: low`. Confidence is stored and schema-validated today; on-page
   visual labeling of low-confidence content is not implemented yet — it is a
   contract for future render work (tracked upstream: moliver28/sitefactory#18).
3. **Secure tips.** Tip-line submissions are raw input, never content. Redact,
   verify, and cite before anything becomes an entity, edge, or page.
4. **No third-party scripts on reader-facing pages.** Zero trackers, zero
   fonts-by-CDN, zero analytics (`site.config.yaml` pins `analytics: none`).
   The single exception is `/admin/` (Sveltia CMS), which is staff-only and
   `noindex`; it is never linked from content pages.
5. **Corrections over deletion.** Fix facts in place; keep entity ids stable —
   edges reference them.

## Content model

- `src/content/entities/*.yaml` — people, organisations, events, places.
  Known fields: `name`, `type`, `summary`. Everything else is free-form; the
  theme renders unknown fields automatically (no component code changes).
- `src/content/edges/*.yaml` — typed relations: `from`, `to`, `kind`,
  `evidence` (paths/URLs), `confidence` (high|medium|low). `from`/`to` must be
  existing entity ids — the build fails on dangling references.
- `src/content/pages/*.md` — narrative pages (frontmatter: `title`,
  `description`, `order`).
- `src/content/custom-entities/*.yaml` — fast path for a brand-new entity
  kind: any shape with `name` + `kind`; rendered by the generic list/detail
  routes at `/custom-entities/`. Promote to a first-class type via a template
  release PR when a kind stabilizes.
  Two known gaps (tracked upstream: moliver28/sitefactory#19): entity-ref
  fields always link to the `entities` route, so a ref pointing at a
  custom-entity id renders `/entities/<id>/` (404); and custom-entities are
  absent from `graph.json`. Reference custom-entities from page prose, not
  entity-ref fields, until those land.

## Content schema (read before writing)

`src/content.config.ts` is the schema source of truth. Read it — including
every `.catchall` rule — before writing any entity, edge, or page:

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
  of being stripped). Trust the schema file in this repo over this summary.

Content-only PRs must never modify `src/content.config.ts`, `src/pages/**`,
`vendor/theme/**`, `.github/**`, or `package.json` — schema, routes, theme,
and CI change only through code PRs, which always require human review.

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
  `astro.config.mjs`, `static/admin/**`), schema (`src/content.config.ts`),
  theme (`vendor/theme/**`), workflows (`.github/**`), `package.json`, or
  lockfiles. A PR mixing content with code/config must be split into
  separate PRs.
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
- Deploys: push to `main` → GitHub Pages at `https://moliver28.github.io/site-scratch-journalism/`;
  PRs get previews at `/pr-<n>/` (auto-cleaned on merge).
