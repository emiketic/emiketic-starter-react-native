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
import HomeScreen from '../HomeScreen';
import App from '../../../App';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    renderer.create(
      <App rootTarget="mainApp">
        <HomeScreen />
      </App>,
    );
  });
});
