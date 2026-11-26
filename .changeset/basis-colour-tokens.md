---
'@openwebconcept/design-tokens': minor
'@openwebconcept/theme-owc': minor
'@openwebconcept/theme-barendrecht': minor
'@openwebconcept/theme-de-fryske-marren': minor
'@openwebconcept/theme-gooise-meren': minor
'@openwebconcept/theme-gouda': minor
'@openwebconcept/theme-hoeksche-waard': minor
'@openwebconcept/theme-leiden': minor
'@openwebconcept/theme-noordwijk': minor
'@openwebconcept/theme-ridderkerk': minor
'@openwebconcept/theme-roosendaal': minor
'@openwebconcept/theme-sudwest-fryslan': minor
---

Added `basis` colour tokens with NL Design System naming and pointed every component to them, so a theme can override text, border, disabled and status colours in one place:

- `basis.color.default.{color-document,color-subtle,border-default}` replace the fixed near-black text colours (`#000000`, `#2e2e2e`), the grey text colour `#4a4a4a` and the two border greys (`#d1d1d1`, `#ced4da`) in case card, description list, file, icon button, tabs and process steps.
- `basis.color.disabled.*` is used by the buttons, links and step markers in their disabled state.
- Process steps and the error status button now use `basis.color.{negative,warning}.*`. The warning colour is `#8a3500` instead of `#f97316`, which meets the WCAG contrast requirement, and the text of a nested warning step marker is no longer white on white.

`owc.color.success`, `owc.color.warning` and `owc.color.danger` are deprecated and will be removed in the next major version.
