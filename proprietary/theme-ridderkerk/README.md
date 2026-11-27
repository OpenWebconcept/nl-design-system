# Ridderkerk Theme

Design tokens for the Ridderkerk municipality theme.

## Sources

The values were measured on [ridderkerk.nl](https://www.ridderkerk.nl/) (theme stylesheet `themes/ridderkerk/assets/dist/build/frontend.css`) on 26 November 2026.

| Token                             | Value                                                                | Used on ridderkerk.nl for                                  |
| --------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| `owc.color.primary`               | `#008937`                                                            | links, the primary button, text selection and focus shadow |
| `owc.typography.font-family.sans` | Open Sans                                                            | body text and headings h3 to h6                            |
| `owc.typography.font-size.*`      | small 0.9rem, body 0.9rem to 1rem, lead 1.1rem                       | small text, body text (0.9rem below 768px), lead text      |
| `owc.typography.line-height.base` | 1.7                                                                  | body text                                                  |
| `owc.button.*`                    | radius 5px, padding 0.7rem 1.2rem, 1rem, weight 700, line height 1.7 | buttons (`.btn`)                                           |

The [Ridderkerk tokens in the NL Design System themes repository](https://github.com/nl-design-system/themes/tree/main/proprietary/ridderkerk-design-tokens) define green `#008937`, purple `#4d327c` and the font Lato; the rest of that set is the example theme. The green still matches the website, but the website now uses purple `#5e3560` and the font Open Sans (Lato is still declared but not used). The website is therefore the source here.

Deliberate differences from the website:

- Headings h1 and h2, card titles and some labels use Jost in capitals on the website. The brand layer has one font family, so Open Sans is used everywhere.
- The primary button on the website turns `#118934` on hover, which is barely different from `#008937`; the website relies on a moving arrow icon instead. The shared darker hover colour is kept so the hover state stays visible.
- The purple secondary colour `#5e3560` is not set as `owc.color.secondary`, because the website does not use it for tab text.

## Installation

```bash
pnpm add @openwebconcept/theme-ridderkerk
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-ridderkerk/dist/index.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-ridderkerk/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-ridderkerk';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
