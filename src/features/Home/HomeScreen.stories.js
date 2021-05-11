// Dependencies
import React from 'react';

// Storybook functions and decorators
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

// Application container
import App from '../../App';

// Local components
// -- Story component
import HomeScreen from './HomeScreen';

// -- Other components

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
storiesOf('HomeScreen', module)
  .addDecorator((story) => <App rootTarget="storybook">{story()}</App>)
  .add('default', () => <HomeScreen />);
