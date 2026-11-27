---
'@openwebconcept/design-tokens': patch
'@openwebconcept/theme-owc': patch
'@openwebconcept/theme-barendrecht': patch
'@openwebconcept/theme-de-fryske-marren': patch
'@openwebconcept/theme-gooise-meren': patch
'@openwebconcept/theme-gouda': patch
'@openwebconcept/theme-hoeksche-waard': patch
'@openwebconcept/theme-leiden': patch
'@openwebconcept/theme-noordwijk': patch
'@openwebconcept/theme-ridderkerk': patch
'@openwebconcept/theme-roosendaal': patch
'@openwebconcept/theme-sudwest-fryslan': patch
---

The steps `xl` to `4xl` of `owc.typography.font-size` are now at least 1.05 times the step below them. A theme that sets larger text for `sm` to `lg` no longer gets headings that are smaller than its lead or body text. The default sizes are unchanged.
