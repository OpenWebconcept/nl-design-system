# OpenWebconcept Theme

The default OpenWebconcept theme. Re-emits the shared token defaults from `@openwebconcept/design-tokens` scoped to the `.theme-owc` CSS selector.

## Status: starter theme, not production

This package is intended as a **starting point**, not a finished product.

- It ships the unopinionated defaults from `@openwebconcept/design-tokens` (`system-ui` typography, a generic blue primary, placeholder component tokens) without any OpenWebconcept brand identity, accessible color contrast review, typography scale tuning, or real-world QA.
- It exists so storybook has a default theme to render and so new municipal themes have a working template to clone.
- For production use, either fork this package into your own municipal theme (see `theme-barendrecht`, `theme-gouda`, etc. for examples of how to override `owc.color.*`, `owc.typography.*`, and component tokens), or use it only after substituting your own brand tokens.

If you are looking for a production theme with a vetted design, pick one of the municipal themes (for example `@openwebconcept/theme-barendrecht`) or build your own.

## Installation

```bash
pnpm add @openwebconcept/theme-owc
```

## Usage

### CSS

```css
@import '@openwebconcept/theme-owc/dist/index.css';
```

Then apply the theme by adding the `theme-owc` class to a root element (e.g. `<html>` or `<body>`):

```html
<html class="theme-owc">
  ...
</html>
```

### SCSS

```scss
@import '@openwebconcept/theme-owc/dist/variables';
```

### JavaScript

```js
import tokens from '@openwebconcept/theme-owc';
```

## Building

```bash
pnpm run build
```

## Development

```bash
pnpm run watch
```

## License

See LICENSE.md for license information.
