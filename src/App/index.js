/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useEffect } from 'react';
import { hide as hideBootSplash } from 'react-native-bootsplash';
import axios from 'axios';

// UI lib components
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

// Navigation
import AppNavigator from '../navigators/AppNavigator';

// State management
import store from '../store';

// Local helpers & utils
import { getSessionToken } from '../shared/services/auth';

// Local configurations
import '../theme';
import '../../.logrc';
import i18n from '../../localization/i18n';

// Load API request driver with session token stored in local storage
// axios.defaults.headers.common.Authorization = `Bearer ${getSessionToken()}`;

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

  useEffect(() => {
    (async function asyncWrapper() {
      await hideBootSplash({ fade: true });
    })();
  }, []);

  /* *************************** MISC CONFIGURATION *************************** */

  /* ******************************** CALLBACKS ******************************* */

  /* ***************************** RENDER HELPERS ***************************** */

  /* ******************************** RENDERING ******************************* */

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppNavigator />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
