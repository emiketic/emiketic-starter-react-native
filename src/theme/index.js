/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Theme configuration dependencies
import {
  ThemeManager,
  Typography,
  Colors,
  Spacings,
} from 'react-native-ui-lib';

// Specific theme style (mostly color scheme)
import light from './light';
import dark from './dark';

/* -------------------------------------------------------------------------- */
/*                             Shared theme style                             */
/* -------------------------------------------------------------------------- */

// Common colors regardless of dark/light theme
Colors.loadColors({
  pink: '#FF69B4',
  gold: '#FFD700',
});

// Fonts and typography
Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

// Spacing
Spacings.loadSpacings({
  page: 20,
});

/* -------------------------------------------------------------------------- */
/*                             Dark and light them                            */
/* -------------------------------------------------------------------------- */

// Load color schemes for each theme
Colors.loadSchemes({
  light,
  dark,
});

/* -------------------------------------------------------------------------- */
/*          Specific shared widget properties outside of color theme          */
/* -------------------------------------------------------------------------- */

// Example applicable to all component instances
ThemeManager.setComponentTheme('Text', {
  uppercase: true,
});

// Example based on specific component prop (here outline)
ThemeManager.setComponentTheme('Button', (props, context) => {
  return {
    backgroundColor: props.outline ? 'black' : 'green',
  };
});
