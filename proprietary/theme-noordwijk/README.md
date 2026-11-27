# Noordwijk Theme

Design tokens for the Noordwijk municipality theme.

## Sources

The values were measured on [noordwijk.nl](https://www.noordwijk.nl/) (theme stylesheet `sage/public/build/assets/frontend-*.css`) on 26 November 2026.

| Token                             | Value                                                                                 | Used on noordwijk.nl for                                   |
| --------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `owc.color.primary`               | `#2c2276`                                                                             | links, headings and the primary button                     |
| `owc.typography.font-family.sans` | Roboto                                                                                | all text, including headings                               |
| `owc.button.*`                    | radius 5px, padding 1.4em 1.8em, `clamp(0.8255rem, …, 0.9091rem)`, weight 500         | buttons                                                    |
| `owc.focus.outline-offset`        | 4px                                                                                   | the focus outline                                          |
| `denhaag.button.font-family`      | Roboto Slab                                                                           | buttons                                                    |
| `nl.button.*`                     | Roboto Slab; primary `#2c2276`, hover `#221a5a`; secondary `#417aa9`, hover `#37678f` | the primary (dark blue) and secondary (light blue) buttons |

The body text size (`clamp(0.875rem, …, 1rem)`) and line height (1.75) of the website are the same as the defaults in `@openwebconcept/design-tokens`, so the theme does not set them.

The [Noordwijk tokens in the NL Design System themes repository](https://github.com/nl-design-system/themes/tree/main/proprietary/noordwijk-design-tokens) and the [Conduction set](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities/noordwijk-design-tokens) agree with each other and with the website: primary colour `#2c2276`, Roboto for text and Roboto Slab for buttons. Earlier versions of this theme used `#417aa9` as the primary colour; on the website that is the secondary colour (the light blue button), so the primary colour is now `#2c2276`.

Deliberate differences from the website:

- The theme does not take over the light weight (300) of body text on the website, for readability.
- The website shows the focus outline in the browser's own style (`outline-style: auto`). The theme keeps the solid outline in the primary colour from `@openwebconcept/design-tokens` and only takes over the offset.

## Installation

```bash
pnpm add @openwebconcept/theme-noordwijk
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-noordwijk/dist/theme.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-noordwijk/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-noordwijk';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
