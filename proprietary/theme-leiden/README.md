# Leiden Theme

Design tokens for the Leiden municipality theme.

## Sources

The values were measured on [gemeente.leiden.nl](https://gemeente.leiden.nl/) (theme stylesheet `theme-fusion/assets/dist/build/frontend.css`) on 26 November 2026.

| Token                             | Value                                             | Used on gemeente.leiden.nl for      |
| --------------------------------- | ------------------------------------------------- | ----------------------------------- |
| `owc.color.primary`               | `#035989`                                         | links (hover `#013a5c`)             |
| `owc.typography.font-family.sans` | Open Sans                                         | all text, including headings        |
| `owc.typography.font-size.*`      | sm 0.9rem, base 1rem, lg 1.1rem                   | small text, body text and lead text |
| `owc.typography.line-height.base` | 1.7                                               | body text                           |
| `owc.button.*`                    | radius 5px, padding 0.8em 1.2em, 1rem, weight 700 | buttons                             |
| `owc.focus.outline-offset`        | 0.3em                                             | the focus outline                   |
| `denhaag.button.primary-action.*` | `#d62410`, hover `#a91c09`                        | the primary (red) button            |
| `nl.button.primary.*`             | `#d62410`, hover and active `#a91c09`             | the primary (red) button            |

There are two existing sets: the [Leiden tokens in the NL Design System themes repository](https://github.com/nl-design-system/themes/tree/main/proprietary/leiden-design-tokens) and the [Conduction set](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities/leiden-design-tokens). They disagree: the NL Design System set uses Poppins for headings and the blue `#035989` for links, the Conduction set uses red `#d62410` for both links and buttons. The website uses Open Sans everywhere (no Poppins), blue links and red buttons, so the website is the source here. The colour values match the palette of both sets.

Deliberate differences from the website:

- The buttons on the website have extra space on the right (3rem) for an arrow icon. The theme uses the same padding (1.2em) on both sides.
- The website shows the focus outline in the browser's own style (`outline-style: auto`). The theme keeps the solid outline in the primary colour from `@openwebconcept/design-tokens` and only takes over the offset.

## Installation

```bash
pnpm add @openwebconcept/theme-leiden
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-leiden/dist/index.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-leiden/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-leiden';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
