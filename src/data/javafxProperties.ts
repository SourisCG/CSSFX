import { ICSSDataProvider, IPropertyData, IAtDirectiveData, IPseudoClassData, IPseudoElementData } from 'vscode-css-languageservice';

const javafxRef = [{ name: "JavaFX CSS Reference", url: "https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/doc-files/cssref.html" }];

export const javafxProperties: ICSSDataProvider = {
  provideProperties(): IPropertyData[] {
    return [
      // Node Properties
      { 
        name: '-fx-blend-mode', 
        description: 'Blend mode for the node',

        restrictions: ['enum'],
        values: [
          { name: 'add' }, { name: 'blue' }, { name: 'color-burn' }, { name: 'color-dodge' },
          { name: 'darken' }, { name: 'difference' }, { name: 'exclusion' }, { name: 'green' },
          { name: 'hard-light' }, { name: 'lighten' }, { name: 'multiply' }, { name: 'overlay' },
          { name: 'red' }, { name: 'screen' }, { name: 'soft-light' }, { name: 'src-atop' },
          { name: 'src-in' }, { name: 'src-out' }, { name: 'src-over' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-cursor', 
        description: 'Cursor type',

        restrictions: ['enum'],
        values: [
          { name: 'null' }, { name: 'crosshair' }, { name: 'default' }, { name: 'hand' },
          { name: 'move' }, { name: 'e-resize' }, { name: 'h-resize' }, { name: 'ne-resize' },
          { name: 'nw-resize' }, { name: 'n-resize' }, { name: 'se-resize' }, { name: 'sw-resize' },
          { name: 's-resize' }, { name: 'w-resize' }, { name: 'v-resize' }, { name: 'text' }, { name: 'wait' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-effect', 
        description: 'Visual effect',

        values: [
          { name: 'dropshadow()', description: 'dropshadow(type, color, radius, spread, offsetX, offsetY)' },
          { name: 'innershadow()', description: 'innershadow(type, color, radius, choke, offsetX, offsetY)' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-focus-traversable', 
        description: 'Whether the node can receive focus',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-view-order', 
        description: 'Rendering and picking order within parent',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-opacity', 
        description: 'Opacity of the node (0.0 to 1.0)',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-rotate', 
        description: 'Rotation angle in degrees',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-scale-x', 
        description: 'Scale factor along X axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-scale-y', 
        description: 'Scale factor along Y axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-scale-z', 
        description: 'Scale factor along Z axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-translate-x', 
        description: 'Translation along X axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-translate-y', 
        description: 'Translation along Y axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-translate-z', 
        description: 'Translation along Z axis',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: 'visibility', 
        description: 'Visibility of the node',
        restrictions: ['enum'],
        values: [{ name: 'visible' }, { name: 'hidden' }, { name: 'collapse' }, { name: 'inherit' }],
        references: javafxRef
      },
      { 
        name: '-fx-managed', 
        description: 'Whether parent manages layout',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // Font Properties
      { 
        name: '-fx-font', 
        description: 'Shorthand font property',

        syntax: '[<font-style> || <font-weight>]? <font-size> <font-family>',
        references: javafxRef
      },
      { 
        name: '-fx-font-family', 
        description: 'Font family name',

        restrictions: ['enum'],
        values: [
          { name: 'system' }, { name: 'serif' }, { name: 'sans-serif' },
          { name: 'cursive' }, { name: 'fantasy' }, { name: 'monospace' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-font-size', 
        description: 'Font size',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-font-style', 
        description: 'Font style',

        restrictions: ['enum'],
        values: [{ name: 'normal' }, { name: 'italic' }, { name: 'oblique' }],
        references: javafxRef
      },
      { 
        name: '-fx-font-weight', 
        description: 'Font weight',

        restrictions: ['enum'],
        values: [
          { name: 'normal' }, { name: 'bold' }, { name: 'bolder' }, { name: 'lighter' },
          { name: '100' }, { name: '200' }, { name: '300' }, { name: '400' },
          { name: '500' }, { name: '600' }, { name: '700' }, { name: '800' }, { name: '900' }
        ],
        references: javafxRef
      },

      // ImageView Properties
      { 
        name: '-fx-image', 
        description: 'Image URL for ImageView',

        restrictions: ['url'],
        references: javafxRef
      },

      // Region - Background
      { 
        name: '-fx-background-color', 
        description: 'Background color(s)',

        restrictions: ['color'],
        values: [
          { name: 'transparent' },
          { name: 'derive()', description: 'Derive a lighter/darker color: derive(color, brightness%)' },
          { name: 'ladder()', description: 'Select color from a scale: ladder(color, stop1, stop2, ...)' },
          { name: 'hsb()', description: 'HSB color: hsb(hue, saturation%, brightness%)' },
          { name: 'hsba()', description: 'HSBA color: hsba(hue, saturation%, brightness%, alpha)' },
          { name: 'linear-gradient()', description: 'Linear gradient' },
          { name: 'radial-gradient()', description: 'Radial gradient' },
          { name: 'image-pattern()', description: 'Image pattern' },
          { name: 'repeating-image-pattern()', description: 'Repeating image pattern' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-background-insets', 
        description: 'Background insets (top, right, bottom, left)',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-background-radius', 
        description: 'Background corner radius',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-background-image', 
        description: 'Background image URL(s)',

        restrictions: ['url'],
        references: javafxRef
      },
      { 
        name: '-fx-background-position', 
        description: 'Background image position',

        restrictions: ['enum'],
        values: [
          { name: 'left' }, { name: 'center' }, { name: 'right' },
          { name: 'top' }, { name: 'bottom' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-background-repeat', 
        description: 'Background image repeat',

        restrictions: ['enum'],
        values: [
          { name: 'repeat-x' }, { name: 'repeat-y' }, { name: 'repeat' },
          { name: 'space' }, { name: 'round' }, { name: 'stretch' }, { name: 'no-repeat' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-background-size', 
        description: 'Background image size',

        restrictions: ['enum', 'length'],
        values: [
          { name: 'auto' }, { name: 'cover' }, { name: 'contain' }, { name: 'stretch' }
        ],
        references: javafxRef
      },

      // Region - Border
      { 
        name: '-fx-border-color', 
        description: 'Border color(s)',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' },
          { name: 'hsb()', description: 'HSB color' },
          { name: 'hsba()', description: 'HSBA color' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-border-insets', 
        description: 'Border insets',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-border-radius', 
        description: 'Border corner radius',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-border-style', 
        description: 'Border style',

        restrictions: ['enum'],
        values: [
          { name: 'none' }, { name: 'solid' }, { name: 'dotted' }, { name: 'dashed' },
          { name: 'segments()', description: 'Custom dash segments' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-border-width', 
        description: 'Border width',

        restrictions: ['length'],
        references: javafxRef
      },

      // Region - Border Image
      { 
        name: '-fx-border-image-source', 
        description: 'Border image URL(s)',

        restrictions: ['url'],
        references: javafxRef
      },
      { 
        name: '-fx-border-image-insets', 
        description: 'Border image insets',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-border-image-repeat', 
        description: 'Border image repeat',

        restrictions: ['enum'],
        values: [
          { name: 'repeat-x' }, { name: 'repeat-y' }, { name: 'repeat' },
          { name: 'space' }, { name: 'round' }, { name: 'no-repeat' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-border-image-slice', 
        description: 'Border image slice',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-border-image-width', 
        description: 'Border image width',

        restrictions: ['length'],
        references: javafxRef
      },

      // Region - Layout
      { 
        name: '-fx-padding', 
        description: 'Padding (top, right, bottom, left)',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-position-shape', 
        description: 'Center SVG shape in region',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-scale-shape', 
        description: 'Scale SVG shape to fit region',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-shape', 
        description: 'SVG path defining region shape',

        references: javafxRef
      },
      { 
        name: '-fx-snap-to-pixel', 
        description: 'Round positions to pixel boundaries',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-min-height', 
        description: 'Minimum height',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-height', 
        description: 'Preferred height',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-max-height', 
        description: 'Maximum height',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-min-width', 
        description: 'Minimum width',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-width', 
        description: 'Preferred width',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-max-width', 
        description: 'Maximum width',

        restrictions: ['length'],
        references: javafxRef
      },

      // Layout Pane Properties
      { 
        name: '-fx-hgap', 
        description: 'Horizontal gap between children',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-vgap', 
        description: 'Vertical gap between children',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-alignment', 
        description: 'Alignment of children',

        restrictions: ['enum'],
        values: [
          { name: 'top-left' }, { name: 'top-center' }, { name: 'top-right' },
          { name: 'center-left' }, { name: 'center' }, { name: 'center-right' },
          { name: 'bottom-left' }, { name: 'bottom-center' }, { name: 'bottom-right' },
          { name: 'baseline-left' }, { name: 'baseline-center' }, { name: 'baseline-right' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-column-halignment', 
        description: 'Column horizontal alignment in FlowPane',

        restrictions: ['enum'],
        values: [{ name: 'left' }, { name: 'center' }, { name: 'right' }],
        references: javafxRef
      },
      { 
        name: '-fx-row-valignment', 
        description: 'Row vertical alignment in FlowPane',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'center' }, { name: 'baseline' }, { name: 'bottom' }],
        references: javafxRef
      },
      { 
        name: '-fx-orientation', 
        description: 'Orientation',

        restrictions: ['enum'],
        values: [{ name: 'horizontal' }, { name: 'vertical' }],
        references: javafxRef
      },
      { 
        name: '-fx-grid-lines-visible', 
        description: 'Show grid lines in GridPane',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-spacing', 
        description: 'Spacing between children',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-fill-height', 
        description: 'Fill height in HBox',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-fill-width', 
        description: 'Fill width in VBox',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-pref-rows', 
        description: 'Preferred number of rows in TilePane',

        restrictions: ['integer'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-columns', 
        description: 'Preferred number of columns in TilePane',

        restrictions: ['integer'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-tile-width', 
        description: 'Preferred tile width in TilePane',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-tile-height', 
        description: 'Preferred tile height in TilePane',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-tile-alignment', 
        description: 'Tile alignment in TilePane',

        restrictions: ['enum'],
        values: [
          { name: 'top-left' }, { name: 'top-center' }, { name: 'top-right' },
          { name: 'center-left' }, { name: 'center' }, { name: 'center-right' },
          { name: 'bottom-left' }, { name: 'bottom-center' }, { name: 'bottom-right' },
          { name: 'baseline-left' }, { name: 'baseline-center' }, { name: 'baseline-right' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-graphic', 
        description: 'Graphic URL',

        restrictions: ['url'],
        references: javafxRef
      },

      // Shape Properties
      { 
        name: '-fx-fill', 
        description: 'Fill paint for shapes',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' },
          { name: 'hsb()', description: 'HSB color' },
          { name: 'hsba()', description: 'HSBA color' },
          { name: 'linear-gradient()', description: 'Linear gradient' },
          { name: 'radial-gradient()', description: 'Radial gradient' },
          { name: 'image-pattern()', description: 'Image pattern' },
          { name: 'repeating-image-pattern()', description: 'Repeating image pattern' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-smooth', 
        description: 'Smooth shape rendering',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-stroke', 
        description: 'Stroke paint for shapes',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' },
          { name: 'hsb()', description: 'HSB color' },
          { name: 'hsba()', description: 'HSBA color' },
          { name: 'linear-gradient()', description: 'Linear gradient' },
          { name: 'radial-gradient()', description: 'Radial gradient' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-type', 
        description: 'Stroke type',

        restrictions: ['enum'],
        values: [{ name: 'inside' }, { name: 'outside' }, { name: 'centered' }],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-dash-array', 
        description: 'Dash pattern for stroke',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-dash-offset', 
        description: 'Dash offset',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-line-cap', 
        description: 'Line cap style',

        restrictions: ['enum'],
        values: [{ name: 'square' }, { name: 'butt' }, { name: 'round' }],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-line-join', 
        description: 'Line join style',

        restrictions: ['enum'],
        values: [{ name: 'miter' }, { name: 'bevel' }, { name: 'round' }],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-miter-limit', 
        description: 'Miter limit',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-stroke-width', 
        description: 'Stroke width',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-arc-height', 
        description: 'Arc height for Rectangle',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-arc-width', 
        description: 'Arc width for Rectangle',

        restrictions: ['length'],
        references: javafxRef
      },

      // Text Properties
      { 
        name: '-fx-bounds-type', 
        description: 'Text bounds type',

        restrictions: ['enum'],
        values: [{ name: 'logical' }, { name: 'visual' }, { name: 'logical-vertical-center' }],
        references: javafxRef
      },
      { 
        name: '-fx-line-spacing', 
        description: 'Line spacing for text',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-font-smoothing-type', 
        description: 'Font smoothing type',

        restrictions: ['enum'],
        values: [{ name: 'gray' }, { name: 'lcd' }],
        references: javafxRef
      },
      { 
        name: '-fx-strikethrough', 
        description: 'Strikethrough text',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-tab-size', 
        description: 'Tab size',

        restrictions: ['integer'],
        references: javafxRef
      },
      { 
        name: '-fx-text-alignment', 
        description: 'Text alignment',

        restrictions: ['enum'],
        values: [{ name: 'left' }, { name: 'center' }, { name: 'right' }, { name: 'justify' }],
        references: javafxRef
      },
      { 
        name: '-fx-text-origin', 
        description: 'Text origin',

        restrictions: ['enum'],
        values: [{ name: 'baseline' }, { name: 'top' }, { name: 'bottom' }],
        references: javafxRef
      },
      { 
        name: '-fx-underline', 
        description: 'Underline text',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // Control Properties
      { 
        name: '-fx-skin', 
        description: 'Skin class name',

        references: javafxRef
      },

      // Labeled Properties
      { 
        name: '-fx-text-overrun', 
        description: 'Text overrun strategy',

        restrictions: ['enum'],
        values: [
          { name: 'center-ellipsis' }, { name: 'center-word-ellipsis' }, { name: 'clip' },
          { name: 'ellipsis' }, { name: 'leading-ellipsis' }, { name: 'leading-word-ellipsis' },
          { name: 'word-ellipsis' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-wrap-text', 
        description: 'Wrap text',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-content-display', 
        description: 'Content display position',

        restrictions: ['enum'],
        values: [
          { name: 'top' }, { name: 'right' }, { name: 'bottom' }, { name: 'left' },
          { name: 'center' }, { name: 'graphic-only' }, { name: 'text-only' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-graphic-text-gap', 
        description: 'Gap between graphic and text',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-label-padding', 
        description: 'Label padding',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-text-fill', 
        description: 'Text fill color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' },
          { name: 'hsb()', description: 'HSB color' },
          { name: 'hsba()', description: 'HSBA color' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-ellipsis-string', 
        description: 'Ellipsis string',

        references: javafxRef
      },

      // Cell Properties
      { 
        name: '-fx-cell-size', 
        description: 'Cell size',

        restrictions: ['length'],
        references: javafxRef
      },

      // ColorPicker Properties
      { 
        name: '-fx-color-label-visible', 
        description: 'Show color label',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // DatePicker Properties
      { 
        name: '-fx-show-week-numbers', 
        description: 'Show week numbers',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // MenuBar Properties
      { 
        name: '-fx-use-system-menu-bar', 
        description: 'Use system menu bar',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // Pagination Properties
      { 
        name: '-fx-max-page-indicator-count', 
        description: 'Max page indicators',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-arrows-visible', 
        description: 'Show arrows',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-tooltip-visible', 
        description: 'Show tooltips',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-page-information-visible', 
        description: 'Show page information',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-page-information-alignment', 
        description: 'Page information alignment',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'bottom' }, { name: 'left' }, { name: 'right' }],
        references: javafxRef
      },

      // ProgressBar Properties
      { 
        name: '-fx-indeterminate-bar-length', 
        description: 'Indeterminate bar length',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-indeterminate-bar-escape', 
        description: 'Indeterminate bar escape',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-indeterminate-bar-flip', 
        description: 'Indeterminate bar flip',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-indeterminate-bar-animation-time', 
        description: 'Animation time',

        restrictions: ['number'],
        references: javafxRef
      },

      // ProgressIndicator Properties
      { 
        name: '-fx-indeterminate-segment-count', 
        description: 'Segment count',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-progress-color', 
        description: 'Progress color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-spin-enabled', 
        description: 'Enable spin',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // ScrollBar Properties
      { 
        name: '-fx-block-increment', 
        description: 'Block increment',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-unit-increment', 
        description: 'Unit increment',

        restrictions: ['number'],
        references: javafxRef
      },

      // ScrollPane Properties
      { 
        name: '-fx-fit-to-width', 
        description: 'Fit to width',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-fit-to-height', 
        description: 'Fit to height',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-pannable', 
        description: 'Enable panning',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-hbar-policy', 
        description: 'Horizontal bar policy',

        restrictions: ['enum'],
        values: [{ name: 'never' }, { name: 'always' }, { name: 'as-needed' }],
        references: javafxRef
      },
      { 
        name: '-fx-vbar-policy', 
        description: 'Vertical bar policy',

        restrictions: ['enum'],
        values: [{ name: 'never' }, { name: 'always' }, { name: 'as-needed' }],
        references: javafxRef
      },

      // Separator Properties
      { 
        name: '-fx-halignment', 
        description: 'Horizontal alignment',

        restrictions: ['enum'],
        values: [{ name: 'left' }, { name: 'center' }, { name: 'right' }],
        references: javafxRef
      },
      { 
        name: '-fx-valignment', 
        description: 'Vertical alignment',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'center' }, { name: 'baseline' }, { name: 'bottom' }],
        references: javafxRef
      },

      // Slider Properties
      { 
        name: '-fx-show-tick-labels', 
        description: 'Show tick labels',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-show-tick-marks', 
        description: 'Show tick marks',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-major-tick-unit', 
        description: 'Major tick unit',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-minor-tick-count', 
        description: 'Minor tick count',

        restrictions: ['integer'],
        references: javafxRef
      },
      { 
        name: '-fx-snap-to-ticks', 
        description: 'Snap to ticks',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // Spinner Properties
      { 
        name: '-fx-initial-delay', 
        description: 'Initial delay',

        values: [
          { name: '100ms' }, { name: '200ms' }, { name: '300ms' }, { name: '500ms' },
          { name: '1000ms' }, { name: '2000ms' }, { name: '5000ms' }, { name: 'indefinite' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-repeat-delay', 
        description: 'Repeat delay',

        values: [
          { name: '60ms' }, { name: '100ms' }, { name: '200ms' }, { name: '500ms' },
          { name: '1000ms' }, { name: 'indefinite' }
        ],
        references: javafxRef
      },

      // TabPane Properties
      { 
        name: '-fx-tab-min-width', 
        description: 'Minimum tab width',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-tab-max-width', 
        description: 'Maximum tab width',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-tab-min-height', 
        description: 'Minimum tab height',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-tab-max-height', 
        description: 'Maximum tab height',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-open-tab-animation', 
        description: 'Open tab animation',

        restrictions: ['enum'],
        values: [{ name: 'grow' }, { name: 'none' }],
        references: javafxRef
      },
      { 
        name: '-fx-close-tab-animation', 
        description: 'Close tab animation',

        restrictions: ['enum'],
        values: [{ name: 'grow' }, { name: 'none' }],
        references: javafxRef
      },

      // TableColumnHeader Properties
      { 
        name: '-fx-size', 
        description: 'Column header size',

        restrictions: ['length'],
        references: javafxRef
      },

      // TableView Properties
      { 
        name: '-fx-fixed-cell-size', 
        description: 'Fixed cell size',

        restrictions: ['length'],
        references: javafxRef
      },

      // TextArea Properties
      { 
        name: '-fx-pref-column-count', 
        description: 'Preferred column count',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-pref-row-count', 
        description: 'Preferred row count',

        restrictions: ['number'],
        references: javafxRef
      },

      // TextInputControl Properties
      { 
        name: '-fx-prompt-text-fill', 
        description: 'Prompt text color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-highlight-fill', 
        description: 'Highlight fill color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-highlight-text-fill', 
        description: 'Highlight text color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-display-caret', 
        description: 'Display caret',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // TitledPane Properties
      { 
        name: '-fx-animated', 
        description: 'Enable animation',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-collapsible', 
        description: 'Enable collapse',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // Tooltip Properties
      { 
        name: '-fx-show-delay', 
        description: 'Show delay',

        values: [
          { name: '100ms' }, { name: '200ms' }, { name: '500ms' }, { name: '1000ms' },
          { name: '2000ms' }, { name: '5000ms' }, { name: 'indefinite' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-show-duration', 
        description: 'Show duration',

        values: [
          { name: '1000ms' }, { name: '2000ms' }, { name: '5000ms' }, { name: '10000ms' },
          { name: 'indefinite' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-hide-delay', 
        description: 'Hide delay',

        values: [
          { name: '100ms' }, { name: '200ms' }, { name: '500ms' }, { name: '1000ms' },
          { name: 'indefinite' }
        ],
        references: javafxRef
      },

      // TreeCell Properties
      { 
        name: '-fx-indent', 
        description: 'Indent per level',

        restrictions: ['length'],
        references: javafxRef
      },

      // WebView Properties
      { 
        name: '-fx-context-menu-enabled', 
        description: 'Enable context menu',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-font-scale', 
        description: 'Font scale',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-page-fill', 
        description: 'Page fill color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },

      // Chart Properties
      { 
        name: '-fx-legend-side', 
        description: 'Legend side',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'bottom' }, { name: 'left' }, { name: 'right' }],
        references: javafxRef
      },
      { 
        name: '-fx-legend-visible', 
        description: 'Show legend',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-title-side', 
        description: 'Title side',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'bottom' }, { name: 'left' }, { name: 'right' }],
        references: javafxRef
      },

      // Axis Properties
      { 
        name: '-fx-side', 
        description: 'Axis side',

        restrictions: ['enum'],
        values: [{ name: 'top' }, { name: 'bottom' }, { name: 'left' }, { name: 'right' }],
        references: javafxRef
      },
      { 
        name: '-fx-tick-length', 
        description: 'Tick length',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-tick-label-font', 
        description: 'Tick label font',

        syntax: '<font>',
        references: javafxRef
      },
      { 
        name: '-fx-tick-label-fill', 
        description: 'Tick label color',

        restrictions: ['color'],
        values: [
          { name: 'derive()', description: 'Derive a lighter/darker color' },
          { name: 'ladder()', description: 'Select color from a scale' }
        ],
        references: javafxRef
      },
      { 
        name: '-fx-tick-label-gap', 
        description: 'Tick label gap',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-tick-mark-visible', 
        description: 'Show tick marks',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-tick-labels-visible', 
        description: 'Show tick labels',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // ValueAxis Properties
      { 
        name: '-fx-minor-tick-length', 
        description: 'Minor tick length',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-minor-tick-visible', 
        description: 'Show minor ticks',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // NumberAxis Properties
      { 
        name: '-fx-tick-unit', 
        description: 'Tick unit',

        restrictions: ['number'],
        references: javafxRef
      },

      // CategoryAxis Properties
      { 
        name: '-fx-start-margin', 
        description: 'Start margin',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-end-margin', 
        description: 'End margin',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-gap-start-and-end', 
        description: 'Gap at start and end',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // XYChart Properties
      { 
        name: '-fx-alternative-column-fill-visible', 
        description: 'Show alternative column fill',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-alternative-row-fill-visible', 
        description: 'Show alternative row fill',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-horizontal-grid-lines-visible', 
        description: 'Show horizontal grid lines',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-horizontal-zero-line-visible', 
        description: 'Show horizontal zero line',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-vertical-grid-lines-visible', 
        description: 'Show vertical grid lines',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-vertical-zero-line-visible', 
        description: 'Show vertical zero line',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // BarChart Properties
      { 
        name: '-fx-bar-gap', 
        description: 'Gap between bars',

        restrictions: ['number'],
        references: javafxRef
      },
      { 
        name: '-fx-category-gap', 
        description: 'Gap between categories',

        restrictions: ['number'],
        references: javafxRef
      },

      // LineChart Properties
      { 
        name: '-fx-create-symbols', 
        description: 'Create symbols',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },

      // PieChart Properties
      { 
        name: '-fx-clockwise', 
        description: 'Clockwise direction',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-pie-label-visible', 
        description: 'Show pie labels',

        restrictions: ['enum'],
        values: [{ name: 'true' }, { name: 'false' }],
        references: javafxRef
      },
      { 
        name: '-fx-label-line-length', 
        description: 'Label line length',

        restrictions: ['length'],
        references: javafxRef
      },
      { 
        name: '-fx-start-angle', 
        description: 'Start angle',

        restrictions: ['number'],
        references: javafxRef
      }
    ];
  },

  provideAtDirectives(): IAtDirectiveData[] {
    return [];
  },

  providePseudoClasses(): IPseudoClassData[] {
    return [
      { name: ':disabled', description: 'Node is disabled', references: javafxRef },
      { name: ':focused', description: 'Node has focus', references: javafxRef },
      { name: ':focus-visible', description: 'Node has visible focus', references: javafxRef },
      { name: ':focus-within', description: 'Node or descendant has focus', references: javafxRef },
      { name: ':hover', description: 'Mouse is over the node', references: javafxRef },
      { name: ':pressed', description: 'Node is pressed', references: javafxRef },
      { name: ':show-mnemonic', description: 'Show mnemonic underlines', references: javafxRef },
      { name: ':armed', description: 'Button is armed', references: javafxRef },
      { name: ':cancel', description: 'Button is cancel button', references: javafxRef },
      { name: ':default', description: 'Button is default button', references: javafxRef },
      { name: ':selected', description: 'Node is selected', references: javafxRef },
      { name: ':determinate', description: 'Progress is determinate', references: javafxRef },
      { name: ':indeterminate', description: 'Progress is indeterminate', references: javafxRef },
      { name: ':empty', description: 'Cell is empty', references: javafxRef },
      { name: ':filled', description: 'Cell is filled', references: javafxRef },
      { name: ':even', description: 'Even indexed cell', references: javafxRef },
      { name: ':odd', description: 'Odd indexed cell', references: javafxRef },
      { name: ':visited', description: 'Hyperlink has been visited', references: javafxRef },
      { name: ':editable', description: 'Control is editable', references: javafxRef },
      { name: ':showing', description: 'Popup is showing', references: javafxRef },
      { name: ':horizontal', description: 'Horizontal orientation', references: javafxRef },
      { name: ':vertical', description: 'Vertical orientation', references: javafxRef },
      { name: ':readonly', description: 'Text input is read-only', references: javafxRef },
      { name: ':pannable', description: 'ScrollPane is pannable', references: javafxRef },
      { name: ':fitToWidth', description: 'ScrollPane fits to width', references: javafxRef },
      { name: ':fitToHeight', description: 'ScrollPane fits to height', references: javafxRef },
      { name: ':expanded', description: 'Node is expanded', references: javafxRef },
      { name: ':collapsed', description: 'Node is collapsed', references: javafxRef },
      { name: ':top', description: 'Top side', references: javafxRef },
      { name: ':right', description: 'Right side', references: javafxRef },
      { name: ':bottom', description: 'Bottom side', references: javafxRef },
      { name: ':left', description: 'Left side', references: javafxRef },
      { name: ':openvertically', description: 'Menu button opens vertically', references: javafxRef },
      { name: ':cell-selection', description: 'Cell selection mode', references: javafxRef },
      { name: ':row-selection', description: 'Row selection mode', references: javafxRef },
      { name: ':last-visible', description: 'Last visible column header', references: javafxRef }
    ];
  },

  providePseudoElements(): IPseudoElementData[] {
    return [];
  }
};
