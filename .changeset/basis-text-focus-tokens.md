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

Added `basis.text.*` (`font-family.default`, `font-size.sm`, `line-height.md`) and `basis.focus.*` (`outline-color`, `outline-width`, `outline-style`, `outline-offset`) with NL Design System naming. They refer to the `owc.*` brand tokens, so a theme can keep setting `owc.*`, or override the `basis.*` tokens directly. The components now refer to `basis.*` instead of `owc.typography.*` and `owc.focus.*`; the resulting values did not change.
