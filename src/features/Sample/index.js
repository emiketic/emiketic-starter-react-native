/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Button, Text } from '@ui-kitten/components';

// Local UI components
import ScreenContainer from '../../shared/components/organisms/ScreenContainer';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function SampleScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Button onPress={() => navigation.navigate('Root')}>
        <Text>Go home</Text>
      </Button>
    </ScreenContainer>
  );
}

export default SampleScreen;
