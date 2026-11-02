# Scratch Journalism Site — Editorial & Agent Rules (journalism vertical)

Layering: global `~/.zcode/AGENTS.md` → sitefactory factory `AGENTS.md` → this file
→ Zod schemas in `src/content.config.ts` (machine-enforced).

## Journalism rules (binding for humans and agents)

1. **Privacy first.** Never publish private individuals' personal data (home
   addresses, phone numbers, identity documents) without documented consent.
   Public officials acting in public capacity are fair game with source cited.
2. **Evidence or silence.** Every entity and edge should cite evidence paths
   under `static/evidence/` (or external URLs). Unverified claims carry
   `confidence: low` and are labeled on render.
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

## Publishing contract (agents)

- Branches: `(agent|human)/(feat|fix|docs)/<kebab-slug>`; PRs only; `main`
  is protected.
- Content-only PRs (entities/edges/pages YAML+MD, evidence files) may
  auto-merge when gates are green. Schema, theme, workflow, or config changes
  always require human review.
- Evidence files go to `static/evidence/<case-id>/…` and are referenced by
  site-rooted paths (`/evidence/…`) — the renderer links them as-is.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (Zod validation fails the build on bad data)
- `npm run typecheck` — astro check
- Deploys: push to `main` → GitHub Pages at `https://moliver28.github.io/site-scratch-journalism/`;
  PRs get previews at `/pr-<n>/` (auto-cleaned on merge).
