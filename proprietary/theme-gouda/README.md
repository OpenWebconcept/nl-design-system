# Gouda Theme

Design tokens for the Gouda municipality theme.

## Sources

The values were measured on [gouda.nl](https://www.gouda.nl/) (theme stylesheet `theme-fusion/frontend.css`) on 26 November 2026, and checked against the [Gouda tokens in the Conduction theme repository](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities/gouda-design-tokens).

| Token                             | Value                                                                           | Used on gouda.nl for                          |
| --------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------- |
| `owc.color.primary`               | `#ea1017`                                                                       | the primary button, link underlines and icons |
| `owc.typography.font-family.sans` | Ubuntu                                                                          | all text                                      |
| `owc.typography.font-size.sm`     | 0.875rem                                                                        | small text                                    |
| `owc.typography.font-size.base`   | 1rem                                                                            | body text                                     |
| `owc.typography.font-size.lg`     | 1.1rem below 576px, 1.2rem above                                                | lead text                                     |
| `owc.typography.line-height.base` | 1.75                                                                            | body text                                     |
| `owc.button.*`                    | no radius, no border, padding 0.7rem 1.2rem, 1rem, weight 700, line height 1.75 | buttons                                       |
| `denhaag.button.primary-action.*` | hover `#c60e13`                                                                 | the hover colour of the primary button        |

The website is the source where it differs from the Conduction set. The Conduction set has the same red (`#ea1017`) and type scale, but gives buttons a 3px radius, a dark red (`#901009`) hover and a blue focus outline with an 8px offset. The website uses square buttons, a `#c60e13` hover and the browser's own focus outline.

The previous primary colour of this theme (`#ea0f18`) was close to, but not, the red of the website.

Contrast: `#ea1017` has a contrast ratio of 4.58:1 with white, both as text on white and as white text on the button. This meets WCAG 2.2 AA (4.5:1), but with little margin, so do not make it lighter.

Deliberate differences from the website:

- Links use the primary colour and are underlined. On the website links are black, with a red line below them inside paragraphs.
- The lead text size scales fluidly between the two values instead of changing in one step at 576px.

## Installation

```bash
pnpm add @openwebconcept/theme-gouda
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-gouda/dist/theme.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-gouda/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-gouda';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
