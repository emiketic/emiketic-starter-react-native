/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { useTranslation } from 'react-i18next';

// UI lib components
import { Button, Text } from 'react-native-ui-lib';

// Local UI components
import ScreenContainer from '../../shared/components/organisms/ScreenContainer';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function SampleScreen({ navigation }) {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation('Common');

  return (
    <ScreenContainer>
      <Button onPress={() => navigation.navigate('Home')}>
        <Text>{t('prompts.home')}</Text>
      </Button>
    </ScreenContainer>
  );
}

export default SampleScreen;
