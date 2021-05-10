/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation, useRoute } from '@react-navigation/native';

// UI lib components
import { SafeAreaView } from 'react-native';
import { Divider, Layout, TopNavigation } from '@ui-kitten/components';

// Local helpers & utils
import { NavigationActionBack } from '../../../aliases/navigation';

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

  const NavigationType = {
    STACK: 'stack',
    TAB: 'tab',
    DRAWER: 'drawer',
  };

  /* ********************************** HOOKS ********************************* */

  // Routing
  const navigation = useNavigation();
  const route = useRoute();

  /* ***************************** LOCAL VARIABLES **************************** */

  /**
   * Determines navigation type to decorate the screen container
   * top bar and other navigation components
   * @returns {String}
   */
  const navigationType = () => {
    if ('popToTop' in navigation) {
      return NavigationType.STACK;
    }
    if ('toggleDrawer' in navigation) {
      return NavigationType.DRAWER;
    }
    return NavigationType.TAB;
  };

  /* ***************************** RENDER HELPERS ***************************** */

  /**
   * Decides whether to render top navigation or not
   * based on the navigation property
   * @returns {Node} Top navigation component or null
   */
  function getTopNavigation() {
    const otherProps = {};
    if (route.name !== 'Root') {
      otherProps.accessoryLeft = () => (
        <NavigationActionBack onNavigateBack={() => navigation.goBack()} />
      );
    }
    if (navigationType() === NavigationType.STACK) {
      return (
        <>
          <Divider />
          <TopNavigation title={title} alignment="center" {...otherProps} />
        </>
      );
    }
    return null;
  }

  /* ******************************** RENDERING ******************************* */

  return (
    <SafeAreaView style={styles.boundaries}>
      {getTopNavigation()}
      <Divider />
      <Layout style={styles.layout}>{children}</Layout>
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
