# Changelog

## [0.0.2] - 2026-05-28

### Enhanced
- Added `values` field to all 155 properties with specific autocomplete suggestions
- Added `restrictions` for intelligent value type detection (color, length, number, enum, url, integer)
- Added `status: 'nonstandard'` to all `-fx-` properties to prevent false validation warnings
- Added `references` linking to official JavaFX CSS Reference documentation
- Enabled default CSS data provider (`useDefaultDataProvider: true`) for standard CSS features:
  - Named colors (red, blue, transparent, etc.)
  - Hex colors (#fff, #rrggbb)
  - rgb(), rgba(), hsl(), hsla() functions
  - linear-gradient(), radial-gradient()
  - Standard keywords (inherit, initial, none, auto)
- Added JavaFX-specific color functions as value suggestions:
  - `derive()` - Derive lighter/darker colors
  - `ladder()` - Select color from a scale
  - `hsb()` - HSB color model
  - `hsba()` - HSBA color model with alpha
- Added effect functions:
  - `dropshadow()` - Drop shadow effect
  - `innershadow()` - Inner shadow effect
- Added image pattern functions:
  - `image-pattern()` - Image pattern fill
  - `repeating-image-pattern()` - Repeating image pattern
- Added duration values for timing properties (100ms, 200ms, 500ms, 1000ms, indefinite, etc.)
- Improved enum value suggestions with all valid options for each property

## [0.0.1] - 2026-05-28

### Added
- Initial release
- 155 JavaFX CSS properties with autocomplete and descriptions
- 35 JavaFX pseudo-classes
- 70+ JavaFX style class selectors
- Hover information for properties and values
- CSS validation (unknown properties, invalid values)
- Syntax highlighting via CSS grammar
- Color decorators
- Document formatting support
- Folding ranges support
