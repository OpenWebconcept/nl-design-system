# NL Design System - Shared Design Tokens

This package contains shared design tokens that are common across all NL Design System themes.

## Purpose

The `@openwebconcept/design-tokens` package extracts common design tokens to:

- Reduce duplication across theme packages
- Ensure consistency in shared design properties
- Make it easier to update common values in one place
- Provide a foundation for new themes

## Included Tokens

### Focus Tokens
- `focus.outline-width`: `2px`
- `focus.outline-style`: `solid`
- `focus.outline-offset`: `2px`

### Typography Tokens
- Font sizes (sm, base, xl) with responsive clamp values
- Line heights

### Component Tokens
- Button structural properties (border, padding, font)

## Usage

Theme packages should depend on this package and reference its tokens. For example:

```json
{
  "theme-name": {
    "focus": {
      "outline-color": {
        "value": "{theme-name.color.primary}"
      },
      "outline-width": {
        "value": "{focus.outline-width}"
      },
      "outline-style": {
        "value": "{focus.outline-style}"
      },
      "outline-offset": {
        "value": "{focus.outline-offset}"
      }
    }
  }
}
```

## Development

- Run `pnpm build` to build all output formats
- Run `pnpm watch` to watch for changes and rebuild automatically

## License

See LICENSE.md for license information.