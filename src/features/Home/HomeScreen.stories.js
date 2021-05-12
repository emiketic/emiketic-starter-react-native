// Dependencies
import React from 'react';

// Storybook functions and decorators
import { storiesOf } from '@storybook/react-native';

// Application container
import App from '../../App';

// Local components
// -- Story component
import HomeScreen from './HomeScreen';

// -- Other components

storiesOf('HomeScreen', module).add('default', () => (
  <App rootTarget="storybook">
    <HomeScreen />
  </App>
));
