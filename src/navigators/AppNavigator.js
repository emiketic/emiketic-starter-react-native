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

function HomeNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={SampleScreen} />
    </Navigator>
  );
}

// We don't need the Storybook UI in test run-time
function PreviewEntranceNavigator() {
  return (
    <Navigator>
      <Screen name="Root" component={PreviewEntranceScreen} />
      {process.NODE_ENV !== 'test' ? (
        <Screen name="Storybook" component={StorybookUIRoot} />
      ) : null}
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={SampleScreen} />
    </Navigator>
  );
}

function AppNavigator() {
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
}

export default AppNavigator;
