/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages and scopes
import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

/* -------------------------------------------------------------------------- */
/*                                 Test groups                                */
/* -------------------------------------------------------------------------- */

// Test components
import LoginScreen from '../LoginScreen';
import App from '../../../../App';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    renderer.create(
      <App rootTarget="mainApp">
        <LoginScreen />
      </App>,
    );
  });
});
