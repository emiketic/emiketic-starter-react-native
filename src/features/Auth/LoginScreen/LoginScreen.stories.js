// Dependencies
import React from 'react';

// Storybook functions and decorators
import { storiesOf } from '@storybook/react-native';

// Application container
import App from '../../../App';

// Local components
// -- Story component
import LoginScreen from './LoginScreen';

// -- Other components

storiesOf('LoginScreen', module).add('default', () => (
  <App rootTarget="storybook">
    <LoginScreen />
  </App>
));
