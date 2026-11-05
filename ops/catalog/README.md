# Theme catalog (stub)

`site.config.yaml` → `theme_preset` picks this site's look. The valid ids are
whatever lives in `vendor/theme/tokens/presets/` on disk — one folder per
preset (`tokens.css` + `meta.yaml`); there is no separate list to keep in
sync. Swapping presets is one config edit plus a rebuild (restart
`astro dev` — the alias is computed at config-load time).

The full catalog with screenshots, verticals, and the intake matcher lives in
the factory repo: https://github.com/moliver28/sitefactory/tree/main/ops/catalog
