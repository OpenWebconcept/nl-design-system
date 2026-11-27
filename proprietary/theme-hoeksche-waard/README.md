# Hoeksche Waard Theme

Design tokens for the Hoeksche Waard municipality theme.

## Sources

The values were measured on [gemeentehw.nl](https://www.gemeentehw.nl/) (theme stylesheet `theme-fusion/frontend.css`) on 26 November 2026.

| Token                             | Value                                                                   | Used on gemeentehw.nl for                |
| --------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `owc.color.primary`               | `#001e60`                                                               | links, headings and the secondary button |
| `owc.typography.font-family.sans` | Ubuntu                                                                  | all text                                 |
| `owc.typography.line-height.base` | 1.7                                                                     | body text                                |
| `owc.button.*`                    | radius 42px, padding 0.7rem 1.3rem, 1.1rem, weight 600, line height 1.7 | buttons                                  |
| `denhaag.button.primary-action.*` | `#2f881b`, hover `#246815`                                              | the primary (green) button               |

The [Hoeksche Waard tokens in the NL Design System themes repository](https://github.com/nl-design-system/themes/tree/main/proprietary/hoeksche-waard-design-tokens) only define two brand colours (`#3BAC2A` and `#4D6EB9`); the rest of that set is the example theme. The website uses darker variants, so the website is the source here.

Deliberate differences from the website:

- Links are underlined. On the website they are not, but navy links in `#333` text can only be told apart by colour, which does not meet WCAG 1.4.1.
- Body text uses the regular weight (400) instead of 300, for readability.

## Installation

```bash
pnpm add @openwebconcept/theme-hoeksche-waard
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-hoeksche-waard/dist/theme.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-hoeksche-waard/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-hoeksche-waard';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
