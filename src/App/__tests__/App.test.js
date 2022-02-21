/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages and scopes
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Test components
import App from '..';

it('renders correctly', () => {
  renderer.create(<App rootTarget="mainApp" />);
});
