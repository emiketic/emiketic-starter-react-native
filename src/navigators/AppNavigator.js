// Packages
import React from 'react';

// Navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local helpers & utils
/* eslint-disable import/no-unresolved */
import { APP_ENV } from '@env'; // @TODO: Figure out why ES-lint is not detecing @env
/* eslint-enable */

// Screens
import StorybookUIRoot from '../../storybook';
import PreviewEntranceScreen from '../shared/components/organisms/PreviewEntranceScreen';
import HomeScreen from '../features/Home';
import SampleScreen from '../features/Sample';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Root" component={HomeScreen} />
    <Screen name="Details" component={SampleScreen} />
  </Navigator>
);

// We don't need the Storybook UI in test run-time
// (although we'll use storyshoots and other SB testing utilities)
const PreviewEntranceNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Root" component={PreviewEntranceScreen} />
    {process.NODE_ENV !== 'test' ? (
      <Screen name="Storybook" component={StorybookUIRoot} />
    ) : null}
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={SampleScreen} />
  </Navigator>
);

const AppNavigator = () => {
  if (APP_ENV === 'preview') {
    return (
      <NavigationContainer>
        <PreviewEntranceNavigator />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
