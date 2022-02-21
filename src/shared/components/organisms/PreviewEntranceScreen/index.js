/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { View } from 'react-native';
import { Button, Text } from 'react-native-ui-lib';

// Local UI components
import ScreenContainer from '../ScreenContainer';

// Style
import styles from './styles';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PreviewEntranceScreen({ navigation }) {
  return (
    <ScreenContainer>
      <View style={styles.row}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>App</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Storybook')}
        >
          <Text>UI</Text>
        </Button>
      </View>
    </ScreenContainer>
  );
}

export default PreviewEntranceScreen;
