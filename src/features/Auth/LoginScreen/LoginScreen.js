/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

// UI lib components
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Text, Icon } from '@ui-kitten/components';
import { Formik } from 'formik';

// Redux actions and selectors
import { $login } from '../slice';

// Local UI components
import ScreenContainer from '../../../shared/components/organisms/ScreenContainer';
import FormFieldAlert from '../../../shared/components/atoms/FormFieldAlert';

// Style
import styles from './styles';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function LoginScreen({ navigation }) {
  /* ********************************** HOOKS ********************************* */

  // State
  const [hidePassword, setHidePassword] = useState(true);

  // Redux
  const dispatch = useDispatch();

  // Localization
  const { t } = useTranslation('Auth');

  /* ***************************** LOCAL VARIABLES **************************** */

  const LoginFormSchema = Yup.object().shape({
    identifier: Yup.string()
      .email(t('LoginScreen.validation.email.invalidEmailFormat'))
      .required(t('LoginScreen.validation.required')),
    password: Yup.string().required(t('LoginScreen.validation.required')),
  });

  /* ******************************** CALLBACKS ******************************* */

  /**
   * Handles form submission and dispatches login action
   * @param {Object} formValues Login form field values
   */
  function onSubmitForm(formValues) {
    console.log('Fields: ', formValues);
    navigation.navigate('Home');
    // @TODO Remove if clause to enable dispatch
    if (false) {
      dispatch($login(formValues));
    }
  }

  /* ***************************** RENDER HELPERS ***************************** */

  function getShowPasswordIcon(props) {
    return (
      <TouchableWithoutFeedback onPress={() => setHidePassword(!hidePassword)}>
        <Icon {...props} name={hidePassword ? 'eye-off' : 'eye'} />
      </TouchableWithoutFeedback>
    );
  }

  function getFieldValidationCaption() {
    if (true) {
      return null;
    }
    // @TODO: Investigate why this is making screen go nuts
    return (
      <View style={styles.formFieldCaption.container}>
        {FormFieldAlert(styles.formFieldCaption.icon)}
        <Text style={styles.formFieldCaption.text}>
          Temp/Dummy validation error text
        </Text>
      </View>
    );
  }

  /* ******************************** RENDERING ******************************* */

  // @TODO: Investigage why onSubmit is not firing
  return (
    <ScreenContainer>
      <Formik
        initialValues={{ identifier: '', password: '' }}
        onSubmit={(values) => console.log('Fields: ', values)}
        validationSchema={LoginFormSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Input
              value={values.identifier}
              errors={errors.identifier}
              placeholder={t('LoginScreen.input.email.placeholder')}
              caption={getFieldValidationCaption}
              autoCapitalize="none"
              onChangeText={handleChange('identifier')}
              onBlur={handleBlur('identifier')}
            />
            <Input
              value={values.password}
              errors={errors.password}
              placeholder={t('LoginScreen.input.password.placeholder')}
              accessoryRight={getShowPasswordIcon}
              autoCapitalize="none"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={hidePassword}
            />
            <Button onPress={() => onSubmitForm(values)}>
              <Text>{t('LoginScreen.cta.login')}</Text>
            </Button>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
}

export default LoginScreen;
