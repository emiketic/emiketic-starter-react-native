// Packages
import React from 'react';

// Navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local helpers & utils
import { APP_ENV } from '@env';

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

const PreviewEntranceNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Root" component={PreviewEntranceScreen} />
    <Screen name="Storybook" component={StorybookUIRoot} />
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
