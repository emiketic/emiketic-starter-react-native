/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// UI lib components
import { View } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native';

// Style
import styles from './styles';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

/**
 * A handy container for a screen to avoid composition boilerplates
 * for custom screens
 * @param {String} param0 Navigation type. Either 'stack' or 'tab', or 'none'
 * Defaults to 'none'
 * @param {String} title Localized title passed from screen implementation
 * @returns {Node} Screen container component that will host actual screen
 * content nodes as children
 * @todo Support tab var navigation if applicable
 */
function ScreenContainer({ title, children }) {
  /* ******************************** CONSTANTS ******************************* */

  /* ********************************** HOOKS ********************************* */

  /* ***************************** LOCAL VARIABLES **************************** */

  /* ***************************** RENDER HELPERS ***************************** */

  /* ******************************** RENDERING ******************************* */

  return (
    <SafeAreaView style={styles.boundaries}>
      <View style={styles.layout}>{children}</View>
    </SafeAreaView>
  );
}

ScreenContainer.propTypes = {
  // Localized title
  title: PropTypes.string,
};

ScreenContainer.defaultProps = {
  title: '',
};

export default ScreenContainer;
