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

Added design tokens for the `alert` component (`--denhaag-alert-*`) and for the button, close button and heading inside it (`--denhaag-button-*`, `--denhaag-icon-button-*`, `--nl-heading-*`). Every theme now includes them. The variants use the new status colours `basis.color.{info,negative,positive,warning}.*` (`--basis-color-*`, NL Design System naming), which a theme can override. Info follows the primary colour of the theme; negative, positive and warning default to accessible fixed colours.
