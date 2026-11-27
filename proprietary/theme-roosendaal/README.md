# Roosendaal Theme

Design tokens for the Roosendaal municipality theme.

## Sources

The values were measured on [roosendaal.nl](https://www.roosendaal.nl/) (theme stylesheet `sage/public/build/assets/frontend-*.css`) on 26 November 2026.

| Token                             | Value                                                                                                | Used on roosendaal.nl for           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `owc.color.primary`               | `#046a38`                                                                                            | links and the green menu button     |
| `owc.typography.font-family.sans` | museo-sans                                                                                           | all text, including headings        |
| `owc.typography.font-size.*`      | sm `clamp(0.875rem, …, 1rem)`, base `clamp(0.875rem, …, 1.125rem)`, lg `clamp(0.875rem, …, 1.25rem)` | small text, body text and lead text |
| `owc.typography.line-height.base` | 1.55                                                                                                 | body text                           |
| `owc.button.*`                    | radius 0.375rem, padding 1.35em 1.77em, `clamp(0.938rem, …, 1.125rem)`, weight 500                   | buttons                             |
| `owc.focus.outline-offset`        | 4px                                                                                                  | the focus outline                   |
| `denhaag.button.primary-action.*` | `#f9b000` with black text, hover `#e8a200`                                                           | the primary (yellow) button         |
| `nl.button.*`                     | `#f9b000` with black text, hover, active and focus `#e8a200`                                         | the primary (yellow) button         |

There is no Roosendaal set in the NL Design System themes repository. The [Conduction set](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities/roosendaal-design-tokens) is out of date: it uses the green `#238527` as primary colour, a green button without rounded corners and Source Sans for body text. The website now uses the darker green `#046a38`, a yellow primary button with rounded corners and museo-sans for all text, so the website is the source here.

museo-sans is a commercial font, served on the website through Adobe Fonts. This theme does not include it; without the font the text falls back to the browser's sans-serif font.

Deliberate differences from the website:

- Buttons on the website have a fixed height (4.1em) with a small vertical padding (0.5em). The theme has no height token, so it uses the vertical padding (1.35em) that gives the same height.
- Links on the website turn light green (`#32a936`) on hover. That colour has a contrast of 3.1:1 on white, which does not meet WCAG 1.4.3, so the theme does not take it over.
- The theme does not take over the light weight (300) of body text on the website, for readability.
- The website shows the focus outline in the browser's own style (`outline-style: auto`). The theme keeps the solid outline in the primary colour from `@openwebconcept/design-tokens` and only takes over the offset.

## Installation

```bash
pnpm add @openwebconcept/theme-roosendaal
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-roosendaal/dist/index.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-roosendaal/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-roosendaal';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
