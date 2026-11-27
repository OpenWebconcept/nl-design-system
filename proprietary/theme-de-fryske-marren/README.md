# Fryske Marren Theme

Design tokens for the De Fryske Marren municipality theme.

## Sources

The values were measured on [defryskemarren.nl](https://www.defryskemarren.nl/) (theme stylesheet `theme-fusion/frontend.css`) on 26 November 2026. There is no De Fryske Marren token set in the NL Design System themes repository or in the Conduction theme repository, so the website is the only source.

| Token                             | Value                                                                               | Used on defryskemarren.nl for                     |
| --------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| `owc.color.primary`               | `#0071bb`                                                                           | the primary button, pagination, icons and borders |
| `owc.typography.font-family.sans` | Roboto                                                                              | all text                                          |
| `owc.typography.font-size.sm`     | 0.9567rem                                                                           | small text                                        |
| `owc.typography.font-size.base`   | 0.9567rem below 768px, 1.063rem above                                               | body text                                         |
| `owc.typography.font-size.lg`     | 1.11615rem                                                                          | lead text                                         |
| `owc.typography.line-height.base` | 1.7                                                                                 | body text                                         |
| `owc.button.*`                    | radius 5px, no border, padding 0.8rem 1.2rem, 1.063rem, weight 400, line height 1.7 | buttons                                           |
| `denhaag.button.primary-action.*` | hover `#005b97`                                                                     | the hover colour of the primary button            |

The body font size changes in one step at 768px on the website; here it scales fluidly between the same two values.

Deliberate differences from the website:

- Links use the primary colour and are underlined. On the website most links are black and only underlined inside paragraphs.
- Body text uses the regular weight (400) instead of 300, for readability.
- The website leaves 3rem of space at the end of a button for an arrow icon. The buttons here have no icon, so both sides use 1.2rem.

## Installation

```bash
pnpm add @openwebconcept/theme-de-fryske-marren
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-de-fryske-marren/dist/theme.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-de-fryske-marren/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-de-fryske-marren';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
