export default {
  // - There are 9 shades for each semantic color (primary in this example),
  // and 6 shades for the same color with transparency.
  // - These colors define the rules of how another theme variables are
  // used and should never be used directly in code. Transparent palette
  // is always a -500 color with an alpha channel. It is needed for disabled, outlined and ghost controls.
  // - The complete list of available theme variables can be found in Light Theme and Dark Theme docs.
  // https://akveo.github.io/react-native-ui-kitten/docs/design-system/eva-light-theme
  // - These colors define the color of the component for a particular state.
  // (-active, -disabled, and the rest). To take a value of another variable,
  // that we use $ sign to define the reference.
  // Semantic colors are always used with its borders.
  // Example of customization here:

  /* -------------------------------------------------------------------------- */
  /*               Eva design system bariables for semantic colors              */
  /* -------------------------------------------------------------------------- */
  // The complete list of available theme variables can be found in Light Theme
  // and Dark Theme docs.
  // https://akveo.github.io/react-native-ui-kitten/docs/design-system/eva-light-theme

  /**
   * There are 9 shades for each semantic color (primary in this example),
   * and 6 shades for the same color with transparency.
   * These colors define the rules of how another theme variables are
   * used and should never be used directly in code
   */
  'color-basic-100': '#FFFFFF',
  'color-basic-200': '#F5F5F5',
  'color-basic-300': '#F5F5F5',
  'color-basic-400': '#D4D4D4',
  'color-basic-500': '#B3B3B3',
  'color-basic-600': '#808080',
  'color-basic-700': '#4A4A4A',
  'color-basic-800': '#383838',
  'color-basic-900': '#292929',
  'color-basic-1000': '#1F1F1F',
  'color-basic-1100': '#141414',
  /**
   * Transparent palette is always a -500 color with an alpha channel.
   * It is needed for disabled, outlined and ghost controls
   * Also, the transparent palette is always a -600 color with alpha channel.
   * Be careful when working with basic, as it is used by both backgrounds and text.
   */
  'color-basic-transparent-100': 'rgba(128, 128, 128, 0.08)',
  'color-basic-transparent-200': 'rgba(128, 128, 128, 0.16)',
  'color-basic-transparent-300': 'rgba(128, 128, 128, 0.24)',
  'color-basic-transparent-400': 'rgba(128, 128, 128, 0.32)',
  'color-basic-transparent-500': 'rgba(128, 128, 128, 0.4)',
  'color-basic-transparent-600': 'rgba(128, 128, 128, 0.48)',

  /* -------------------------------------------------------------------------- */
  /*                           Background and borders                           */
  /* -------------------------------------------------------------------------- */

  /**
   * Backgrounds and borders are controlled with Basic color.
   * There are 4 levels of background used by Layout, Input and similar to it
   * components
   */
  'background-basic-color-1': '$color-basic-800',
  'background-basic-color-2': '$color-basic-900',
  'background-basic-color-3': '$color-basic-1000',
  'background-basic-color-4': '$color-basic-1100',

  /* -------------------------------------------------------------------------- */
  /*                               Component state                              */
  /* -------------------------------------------------------------------------- */

  /**
   * There are 5 stateful color variables for each semantic color.
   */
  'color-primary-default': '$color-primary-500',
  'color-primary-hover': '$color-primary-400',
  'color-primary-focus': '$color-primary-600',
  'color-primary-active': '$color-primary-600',
  'color-primary-disabled': '$color-basic-transparent-300',

  /* -------------------------------------------------------------------------- */
  /*                               Text and icons                               */
  /* -------------------------------------------------------------------------- */

  /**
   * Text and Icon colors are controlled by Basic shades.
   * In a dark theme, text colors utilize the upper part of the shades
   * (whitish colors) and backgrounds in the lower part.
   * So, to tweak text more accurately, we may add these variables to theme.json
   * to override its default value. Let's make the default text darker.
   * We may use the value of another theme variable by creating a reference with $ sign.
   * This will be handled by UI Kitten.
   */
  'text-basic-color': '$color-basic-400',
};
