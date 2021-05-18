/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RNBootSplash from 'react-native-bootsplash';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import axios from 'axios';

// UI lib components
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { I18nextProvider } from 'react-i18next';

// Navigation
import AppNavigator from '../navigators/AppNavigator';

// State management
import store from '../store';
import { ThemeContext } from '../theme/theme-context';

// Local helpers & utils
import { getSessionToken } from '../shared/services/auth';

// Local configurations
import appTheme from '../theme';
import mapping from '../theme/mapping.json';
import i18n from '../../localization/i18n';

// Load API request driver with session token stored in local storage
axios.defaults.headers.common.Authorization = `Bearer ${getSessionToken()}`;

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

/**
 * Application container
 * @param {String} rootTarget Tells whether to render Storybook or only the app
 * @returns {ReactElement} Application container
 */
function App({ rootTarget, children }) {
  /* ********************************** HOOKS ********************************* */

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    (async function asyncWrapper() {
      await RNBootSplash.hide({ fade: true });
    })();
  }, []);

  /* *************************** MISC CONFIGURATION *************************** */

  // Load store from local storage
  const persistor = persistStore(store);

  /* ******************************** CALLBACKS ******************************* */

  function onChangeTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }

  /* ***************************** RENDER HELPERS ***************************** */

  /**
   * Tells whether the App container will be used to render the main
   * app or Storybook. This allows us to have a single point of mainteance
   * for both apps
   * @returns {ReactElement} Children to be rendered under the different providers
   */
  function getRootRenderingTarget() {
    if (rootTarget === 'mainApp') {
      return <AppNavigator />;
    } else if (rootTarget === 'storybook') {
      return children;
    }
  }

  /* ******************************** RENDERING ******************************* */

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <ThemeContext.Provider value={{ theme, onChangeTheme }}>
              <ApplicationProvider
                {...eva}
                theme={{ ...eva[theme], ...appTheme[theme] }}
                customMapping={mapping}
              >
                {getRootRenderingTarget()}
              </ApplicationProvider>
            </ThemeContext.Provider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

App.propTypes = {
  rootTarget: PropTypes.oneOf(['mainApp', 'storybook']),
};

App.defaultProps = {
  rootTarget: 'mainApp',
};

export default App;
