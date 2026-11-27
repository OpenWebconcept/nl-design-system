# Barendrecht Theme

Design tokens for the Barendrecht municipality theme.

## Sources

There is no existing token set for Barendrecht (not in the NL Design System themes repository, not at Conduction). The values were measured on [barendrecht.nl](https://www.barendrecht.nl/) (theme stylesheet `theme-fusion/frontend.css`) on 26 November 2026.

| Token                                            | Value                                                                    | Used on barendrecht.nl for                               |
| ------------------------------------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `owc.color.primary`                              | `#032d57`                                                                | links, headings and the primary button                   |
| `owc.typography.font-family.sans`                | Lato                                                                     | all text                                                 |
| `owc.typography.font-size.*`                     | small 0.9567rem, body 0.9567rem to 1.063rem, lead 1.1693rem              | small text, body text (0.9567rem below 768px), lead text |
| `owc.typography.line-height.base`                | 1.7                                                                      | body text                                                |
| `owc.button.*`                                   | radius 7px, padding 0.7rem 1.2rem, 1.063rem, weight 700, line height 1.7 | buttons (`.btn`)                                         |
| `denhaag.button.primary-action.*`, `nl.button.*` | hover `#0653a1`                                                          | hover and focus of the primary button                    |

Deliberate differences from the website:

- The orange secondary colour `#e5754c` is not set as `owc.color.secondary`: as text on white its contrast is 3.0:1, below the WCAG minimum of 4.5:1.

## Installation

```bash
pnpm add @openwebconcept/theme-barendrecht
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-barendrecht/dist/theme.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-barendrecht/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-barendrecht';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
