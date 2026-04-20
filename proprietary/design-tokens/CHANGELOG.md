# @openwebconcept/design-tokens

## 1.0.0

### Patch Changes

- 974b14d: Split `@openwebconcept/design-tokens` responsibilities.
  - `@openwebconcept/design-tokens` no longer emits `dist/theme.css` scoped to `.theme-owc`. It now exposes only the root-scoped neutral primitives in `dist/tokens.css` (plus SCSS, JS, and JSON outputs).
  - New `@openwebconcept/theme-owc` package emits the `.theme-owc`-scoped CSS as `dist/index.css`, mirroring the shape of the municipal theme packages.
  - Consumers previously importing `@openwebconcept/design-tokens/dist/theme.css` should switch to `@openwebconcept/theme-owc/dist/index.css`.
