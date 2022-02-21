import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

/* -------------------------------------------------------------------------- */
/*                                  Storybook                                 */
/* -------------------------------------------------------------------------- */

// Based on Storybook docs
jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));

// Based on: https://codeburst.io/react-native-storybook-generating-individual-test-files-to-snapshot-bdbda32625ce
jest.mock('@storybook/react-native', () => {
  const actual = jest.requireActual('@storybook/react-native');
  return {
    ...actual,
    getStorybookUI: jest.fn(),
    storiesOf: (...args: any[]) => {
      const storybook = actual.storiesOf(...args);
      storybook.addDecorator = () => storybook;
      return storybook;
    },
    addDecorator: () => null,
  };
});

/* -------------------------------------------------------------------------- */
/*                                Async storage                               */
/* -------------------------------------------------------------------------- */

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

/* -------------------------------------------------------------------------- */
/*                           React Native Reanimated                          */
/* -------------------------------------------------------------------------- */

jest.mock('react-native-reanimated', () => {
  global.__reanimatedWorkletInit = jest.fn();
  const Reanimated = require('react-native-reanimated/mock');
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

/* -------------------------------------------------------------------------- */
/*                              React Navigation                              */
/* -------------------------------------------------------------------------- */

// New file location since RN 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Navigation mocking at app-level. Can also be mocked at the test case level
// Based on: https://medium.com/@dariaruckaolszaska/testing-your-react-navigation-5-hooks-b8b8f745e5b6
jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useRoute: () => ({
      name: jest.mock(),
    }),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

/* -------------------------------------------------------------------------- */
/*                                Splash screen                               */
/* -------------------------------------------------------------------------- */

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValueOnce(),
    show: jest.fn().mockResolvedValueOnce(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});
