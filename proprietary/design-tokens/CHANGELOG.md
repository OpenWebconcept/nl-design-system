# @openwebconcept/design-tokens

## 2.0.0

### Major Changes

- 2719b22: Aligned the default component tokens with the mijn-omgeving WordPress theme (`owc-mijn-omgeving-sage-theme`, `resources/styles/nlds`), so that theme can load these tokens instead of setting the variables itself:
  - Case card: the primary colour as background, black title and context, a 200px card without rounded corners and 1.5rem padding.
  - Description list: padding in `em`, a first column of 240px and the caption at heading 2 size.
  - File, tabs and process steps: spacing, font weights and font sizes as in mijn-omgeving.
  - Buttons: 5px corners, 0.75em 1.25em padding, weight 400 and a new `owc.button.line-height` (1.375). The primary `nl-button` darkens on hover and the subtle `nl-button` is grey (`basis.color.default.bg-subtle`, `bg-default` on hover) with black text.
  - Heading: colour, size, weight, line height and margins per heading level.
  - New `basis.text.font-size.*` scale (`md` to `4xl`), which refers to `owc.typography.font-size.*`, and the Tailwind greys of mijn-omgeving as `basis.color.default.*`; the negative colour is `#c10007`.
  - Breaking: `owc.typography.font-size.xl` is renamed to `owc.typography.font-size.lg`, and `owc.typography.font-size.xl` to `4xl` are new steps of the scale. A theme that overrides `xl` should rename it to `lg`. The icon in the large `denhaag-button` follows `basis.text.font-size.xl` (at most 1.21rem instead of 1.25rem).

  The warning colour of process steps stays `#8a3500` and `basis.color.default.color-subtle` is `#4a5565` instead of `#6a7282`, because the mijn-omgeving values do not meet the WCAG contrast requirement (`#ff6900` on white, `#6a7282` on the grey of an archived case card).

### Minor Changes

- 7056d74: Added design tokens for the `alert` component (`--denhaag-alert-*`) and for the button, close button and heading inside it (`--denhaag-button-*`, `--denhaag-icon-button-*`, `--nl-heading-*`). Every theme now includes them. The variants use the new status colours `basis.color.{info,negative,positive,warning}.*` (`--basis-color-*`, NL Design System naming), which a theme can override. Info follows the primary colour of the theme; negative, positive and warning default to accessible fixed colours.
- 36276f3: Added `basis` colour tokens with NL Design System naming and pointed every component to them, so a theme can override text, border, disabled and status colours in one place:
  - `basis.color.default.{color-document,color-subtle,border-default}` replace the fixed near-black text colours (`#000000`, `#2e2e2e`), the grey text colour `#4a4a4a` and the two border greys (`#d1d1d1`, `#ced4da`) in case card, description list, file, icon button, tabs and process steps.
  - `basis.color.disabled.*` is used by the buttons, links and step markers in their disabled state.
  - Process steps and the error status button now use `basis.color.{negative,warning}.*`. The warning colour is `#8a3500` instead of `#f97316`, which meets the WCAG contrast requirement, and the text of a nested warning step marker is no longer white on white.

  `owc.color.success`, `owc.color.warning` and `owc.color.danger` are deprecated and will be removed in the next major version.

- 0a52ba1: Added `basis.text.*` (`font-family.default`, `font-size.sm`, `line-height.md`) and `basis.focus.*` (`outline-color`, `outline-width`, `outline-style`, `outline-offset`) with NL Design System naming. They refer to the `owc.*` brand tokens, so a theme can keep setting `owc.*`, or override the `basis.*` tokens directly. The components now refer to `basis.*` instead of `owc.typography.*` and `owc.focus.*`; the resulting values did not change.
- 4ffd68e: Added design tokens for the `card-group` component (`--denhaag-card-group-*`). Every theme now includes them.
- 6714b12: Added design tokens for the `case-card` component (`--denhaag-case-card-*`) and the links inside it (`--denhaag-link-*`, `--nl-link-*`). Every theme now includes them. The title, subtitle, arrow and background colours are derived from the primary colour of the theme.
- 0858380: Added design tokens for the `description-list` component (`--denhaag-description-list-*`). Every theme now includes them.
- 5650e65: Added design tokens for the `file` component (`--denhaag-file-*`). Every theme now includes them. The link and focus colours follow the primary colour of the theme.
- de27e3b: Added the base colours of the step marker (`--denhaag-step-marker-background-color`, `-color`, `-connector-color` and `-connector-outline-color`), which had no value.
- 4ce429b: Added design tokens for the `tabs` component (`--denhaag-tabs-*`) and the `number-badge` it uses for tab indicators (`--nl-number-badge-*`). Every theme now includes them.

### Patch Changes

- 40bf0df: The steps `xl` to `4xl` of `owc.typography.font-size` are now at least 1.05 times the step below them. A theme that sets larger text for `sm` to `lg` no longer gets headings that are smaller than its lead or body text. The default sizes are unchanged.

## 1.0.0

### Patch Changes

- 974b14d: Split `@openwebconcept/design-tokens` responsibilities.
  - `@openwebconcept/design-tokens` no longer emits `dist/theme.css` scoped to `.theme-owc`. It now exposes only the root-scoped neutral primitives in `dist/tokens.css` (plus SCSS, JS, and JSON outputs).
  - New `@openwebconcept/theme-owc` package emits the `.theme-owc`-scoped CSS as `dist/index.css`, mirroring the shape of the municipal theme packages.
  - Consumers previously importing `@openwebconcept/design-tokens/dist/theme.css` should switch to `@openwebconcept/theme-owc/dist/index.css`.
