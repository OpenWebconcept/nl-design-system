# Gooise Meren Theme

Design tokens for the Gooise Meren municipality theme.

## Sources

The values were measured on [gooisemeren.nl](https://www.gooisemeren.nl/) (theme stylesheet `_assets/vite/assets/Main-*.css`) on 26 November 2026, and checked against the [Gooise Meren tokens in the Conduction theme repository](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities/gooise-meren-design-tokens).

| Token                             | Value                                               | Used on gooisemeren.nl for             |
| --------------------------------- | --------------------------------------------------- | -------------------------------------- |
| `owc.color.primary`               | `#c00862`                                           | links and buttons                      |
| `owc.typography.font-family.sans` | Rehn, with Calibri, Corbel and Arial as fallback    | all text                               |
| `owc.typography.font-size.sm`     | 1rem                                                | small text                             |
| `owc.typography.font-size.base`   | 1.125rem                                            | body text (18px)                       |
| `owc.typography.font-size.lg`     | 1.25rem                                             | larger text                            |
| `owc.typography.line-height.base` | 1.5                                                 | intro text and lists                   |
| `owc.button.*`                    | no radius, padding 0.5em 1em, 1.3125rem, weight 700 | buttons                                |
| `owc.focus.outline-style`         | dashed                                              | the focus outline of links and buttons |
| `denhaag.button.primary-action.*` | hover `#441d42`                                     | the hover colour of buttons and links  |
| `nl.button.*`                     | hover, active and focus `#441d42`                   | the hover colour of buttons and links  |
| `basis.focus.outline-color`       | `#441d42`                                           | the focus outline of links and buttons |
| `nl.heading.level-*`              | `#441d42`, weight 500                               | headings                               |

The website and the Conduction set agree on the colours (pink `#c00862`, purple `#441d42` for hover), the font, the 18px body text and the dashed focus outline. The Conduction set gives the default button a beige background (`#887439`) and a smaller padding; the website uses pink buttons, so the website is the source for the buttons.

Rehn is a commercial font and is not included in this theme. Without it, the text falls back to Calibri, Corbel or Arial. A site that has a licence for Rehn has to load the font itself, with the family name `Rehn`.

Deliberate differences from the website:

- The website sets no line height for body text, so the browser default (about 1.2) applies. That is too tight for reading, so this theme uses 1.5, which the website uses for intro text and lists.
- The buttons on the website have a 3px purple border on the right and bottom only. This cannot be expressed with the shared button tokens, so the buttons here have the default border.

## Installation

```bash
pnpm add @openwebconcept/theme-gooise-meren
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-gooise-meren/dist/index.css';
```

### SCSS

```scss
@import '@openwebconcept/theme-gooise-meren/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-gooise-meren';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```
