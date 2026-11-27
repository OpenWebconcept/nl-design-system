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

Aligned the default component tokens with the mijn-omgeving WordPress theme (`owc-mijn-omgeving-sage-theme`, `resources/styles/nlds`), so that theme can load these tokens instead of setting the variables itself:

- Case card: the primary colour as background, black title and context, a 200px card without rounded corners and 1.5rem padding.
- Description list: padding in `em`, a first column of 240px and the caption at heading 2 size.
- File, tabs and process steps: spacing, font weights and font sizes as in mijn-omgeving.
- Buttons: 5px corners, 0.75em 1.25em padding, weight 400 and a new `owc.button.line-height` (1.375). The primary `nl-button` darkens on hover and the subtle `nl-button` is grey (`basis.color.default.bg-subtle`, `bg-default` on hover) with black text.
- Heading and paragraph: colour, size, weight, line height and margins per heading level, and no paragraph margins.
- New `basis.text.font-size.*` scale (`md` to `4xl`) and the Tailwind greys of mijn-omgeving as `basis.color.default.*`; the negative colour is `#c10007`.

The warning colour of process steps stays `#8a3500` and the archived case card action stays `#6a7282`, because the mijn-omgeving values (`#ff6900` and `#8b95a2`) do not meet the WCAG contrast requirement.
