/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';

// UI lib components
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Navigation
import AppNavigator from '../navigators/AppNavigator';

// State management
import { ThemeContext } from '../theme/theme-context';

// Local configurations
import appTheme from '../theme';
import mapping from '../theme/mapping.json';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function App() {
  /* ********************************** HOOKS ********************************* */

  const [theme, setTheme] = useState('light');

  /* ******************************** CALLBACKS ******************************* */

  function onChangeTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...appTheme[theme] }}
          customMapping={mapping}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
