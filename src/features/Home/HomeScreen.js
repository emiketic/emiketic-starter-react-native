/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Button, Text } from 'react-native-ui-lib';

// Local UI components
import ScreenContainer from '../../shared/components/organisms/ScreenContainer';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Button onPress={() => navigation.navigate('Details')}>
        <Text h1 textColor>
          Open details
        </Text>
      </Button>
    </ScreenContainer>
  );
}

export default HomeScreen;
