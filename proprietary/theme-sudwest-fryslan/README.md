# Súdwest-Fryslân Theme

Design tokens for the Súdwest-Fryslân municipality theme.

## Sources

There is no existing token set for Súdwest-Fryslân (not in the NL Design System themes repository, not at Conduction). The values were measured on [sudwestfryslan.nl](https://sudwestfryslan.nl/) (theme stylesheet `themes/sitenu/assets/dist/css/index.css` and the Adobe Fonts kit) on 26 November 2026.

| Token                             | Value                                                         | Used on sudwestfryslan.nl for                       |
| --------------------------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| `owc.color.primary`               | `#bf0042`                                                     | links, buttons, footer, hover tiles                 |
| `owc.typography.font-family.sans` | calluna-sans                                                  | body text and links                                 |
| `owc.typography.font-size.*`      | small 0.9rem, body 1.125rem (18px), large 1.2375rem           | small text (80%), body text, h3 (1.1em)             |
| `owc.typography.line-height.base` | 1.5                                                           | body text                                           |
| `owc.button.*`                    | radius 0, padding 0.8125rem 1.1875rem (13px 19px), weight 800 | outlined buttons (`.accent-button`, submit buttons) |

The website loads Calluna Sans (`calluna-sans`) from Adobe Fonts. That font is commercial and has no open source package, so it only renders where the municipality's own Adobe Fonts kit is loaded; elsewhere the theme falls back to the system sans-serif font.

Deliberate differences from the website:

- Headings and buttons use Montserrat (weight 800) on the website. The brand layer has one font family, so calluna-sans is used everywhere.
- Body text on the website uses weight 300; the theme keeps the regular weight for readability.
- The primary button hover is the shared darker mix of `#bf0042`, which is practically the same as the `#8c0030` the website uses.
- The blue accent `#009fd2` is not used as `owc.color.secondary`: as text on white its contrast is 3.1:1, below the WCAG minimum of 4.5:1.

## Installation

```bash
pnpm add @openwebconcept/theme-sudwest-fryslan
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-sudwest-fryslan/dist/index.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-sudwest-fryslan/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-sudwest-fryslan';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
