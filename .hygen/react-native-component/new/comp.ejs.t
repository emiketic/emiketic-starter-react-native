---
to: "<%= feature ? `src/features/${h.changeCase.pascal(feature)}/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.js` : shared ? `src/shared/components/${type}/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.js` : `src/shared/components/${h.changeCase.pascal(name)}/${h.changeCase.pascal(name)}.js`  %>"
---
<% const comp = h.changeCase.pascal(name) -%>
<% if(locals.screen) { -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Button, Text } from '@ui-kitten/components';

// Local UI components
import ScreenContainer from '../../../shared/components/organisms/ScreenContainer';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= h.changeCase.pascal(name) %>({ navigation }) {
  return (
    <ScreenContainer>
      <Button onPress={() => navigation.navigate('Root')}>
        <Text>Go home</Text>
      </Button>
    </ScreenContainer>
  );
}

export default <%= h.changeCase.pascal(name) %>;
<% } else if(locals.detached) { -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// UI lib components
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

// Local UI components
import Hero from '../atoms/Hero';

// Local helpers & utils
import { DEFAULT_DATE_FORMAT, apiService } from '@env';

// Style
import styles from './styles';

// Required modules
const format = require('date-fns/format');

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= h.changeCase.pascal(name) %>({ title, categories, recipe }) {
  /* *********************** FUNDAMENTAL LOCAL VARIABLES ********************** */

  const defaultCaloryContribution = recipe?.sugar * CALORY_FACTOR || 0;

  /* ******************************** CONSTANTS ******************************* */

  const CALORY_FACTOR = 2.13;
  const MealMertric = {
    MAX_DAILY_CALORIES: 'max-daily-calories',
  };

  /* ********************************** HOOKS ********************************* */
  // State
  const [caloryContribution, setCaloryContribution] = useState(
    defaultCaloryContribution,
  );
  const [isDisplayAsServerd, setIsDisabledAsServed] = useState(false);
  const [availableRecipes, setAvailableRecipes] = useState([]);

  // Localization
  const { t, i18n } = useTranslation(['Common', 'Meals']);

  // Side-effects
  useEffect(() => {
    (async function asyncWrapper() {
      const fetchedRecipeRecords = await apiService();
      setAvailableRecipes(fetchedRecipeRecords);
    })();
  }, []);

  /* ***************************** LOCAL VARIABLES **************************** */

  const computedCalories = caloryContribution * MealMertric.MAX_DAILY_CALORIES;
  const colonSpacing = i18n.language === 'fr-FR' ? ' :' : ':';

  /* ******************************** CALLBACKS ******************************* */

  /**
   * Handles state reset after reset CTA was clicked
   */
  function onPressReset() {
    setCaloryContribution(0);
    setIsDisabledAsServed(false);
  }

  /* **************************** RENDERING HELPERS *************************** */

  /**
   * Displays the reset CTA button depending on the meal display state
   * @returns {React.Element} Reset button or `null`
   */
  function getResetCta() {
    if (isDisplayAsServerd) {
      return (
        <Button
          style={styles.ctaReset}
          status="warning"
          hasTVPreferredFocus
          onPress={onPressReset}
        >
          {t('Meals:MealScreen.cta.reset')}
        </Button>
      );
    }
    return null;
  }

  /* ******************************** RENDERING ******************************* */

  return (
    <View style={styles.<%= h.changeCase.camel(name) %>}>
      <Hero style={styles.hero}>
        <Text style={styles.greetings}>{t('Common:Greetings.hello')}</Text>
        <Text>{format(new Date(), "'Today is a' eeee")}</Text>
        <Text>{t('Meals:MealScreen.introduction.label')}</Text>
        <Text>{t('Meals:MealScreen.introduction.description')}</Text>
      </Hero>
      <Text>{`${t(
        'Meals:MealScreen.result.label',
      )}${colonSpacing} ${computedCalories}`}</Text>
      {getResetCta()}
    </View>
  );
}

<%= h.changeCase.pascal(name) %>.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.oneOf(['spicy', 'asian', 'vegetarian']),
  recipe: PropTypes.shape({
    sugar: PropTypes.number,
    pepper: PropTypes.bool,
    cookingTime: PropTypes.number.isRequired,
  }),
};

<%= h.changeCase.pascal(name) %>.defaultProps = {
  categories: [],
  recipe: {
    sugar: 0,
    pepper: false,
  },
};

export default <%= h.changeCase.pascal(name) %>;
<% } else if(locals.static) { -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// UI lib components
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

// Local UI components
import Hero from '../atoms/Hero';

// Local helpers & utils
import { DEFAULT_DATE_FORMAT } from '@env';

// Style
import styles from './styles';

// Required modules
const format = require('date-fns/format');

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= h.changeCase.pascal(name) %>({ title, categories, recipe }) {
  /* *********************** FUNDAMENTAL LOCAL VARIABLES ********************** */

  const defaultCaloryContribution = recipe?.sugar * CALORY_FACTOR || 0;

  /* ******************************** CONSTANTS ******************************* */

  const CALORY_FACTOR = 2.13;
  const MealMertric = {
    MAX_DAILY_CALORIES: 'max-daily-calories',
  };

  /* ********************************** HOOKS ********************************* */
  // State
  const [caloryContribution, setCaloryContribution] = useState(
    defaultCaloryContribution,
  );
  const [isDisplayAsServerd, setIsDisabledAsServed] = useState(false);

  // Localization
  const { t, i18n } = useTranslation(['Common', 'Meals']);

  /* ***************************** LOCAL VARIABLES **************************** */

  const computedCalories = caloryContribution * MealMertric.MAX_DAILY_CALORIES;
  const colonSpacing = i18n.language === 'fr-FR' ? ' :' : ':';

  /* ******************************** CALLBACKS ******************************* */

  /**
   * Handles state reset after reset CTA was clicked
   */
  function onPressReset() {
    setCaloryContribution(0);
    setIsDisabledAsServed(false);
  }

  /* **************************** RENDERING HELPERS *************************** */

  /**
   * Displays the reset CTA button depending on the meal display state
   * @returns {React.Element} Reset button or `null`
   */
  function getResetCta() {
    if (isDisplayAsServerd) {
      return (
        <Button
          style={styles.ctaReset}
          status="warning"
          hasTVPreferredFocus
          onPress={onPressReset}
        >
          {t('Meals:MealScreen.cta.reset')}
        </Button>
      );
    }
    return null;
  }

  /* ******************************** RENDERING ******************************* */

  return (
    <View style={styles.<%= h.changeCase.camel(name) %>}>
      <Hero style={styles.hero}>
        <Text style={styles.greetings}>{t('Common:Greetings.hello')}</Text>
        <Text>{format(new Date(), "'Today is a' eeee")}</Text>
        <Text>{t('Meals:MealScreen.introduction.label')}</Text>
        <Text>{t('Meals:MealScreen.introduction.description')}</Text>
      </Hero>
      <Text>{`${t(
        'Meals:MealScreen.result.label',
      )}${colonSpacing} ${computedCalories}`}</Text>
      {getResetCta()}
    </View>
  );
}

<%= h.changeCase.pascal(name) %>.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.oneOf(['spicy', 'asian', 'vegetarian']),
  recipe: PropTypes.shape({
    sugar: PropTypes.number,
    pepper: PropTypes.bool,
    cookingTime: PropTypes.number.isRequired,
  }),
};

<%= h.changeCase.pascal(name) %>.defaultProps = {
  categories: [],
  recipe: {
    sugar: 0,
    pepper: false,
  },
};

export default <%= h.changeCase.pascal(name) %>;
<% } else { -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// UI lib components
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

// Local UI components
import Hero from '../atoms/Hero';
import FeatureLoader from '../molecules/FeatureLoader';

// Redux actions and selectors
import {
  $fetchRecipe,
  selectRecipeCurrent,
  selectRecipeLoading,
} from '../state';

// Style
import styles from './styles';

// Required modules
const format = require('date-fns/format');

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= h.changeCase.pascal(name) %>({ title, categories }) {
  /* *********************** FUNDAMENTAL LOCAL VARIABLES ********************** */

  const defaultCaloryContribution = recipe?.sugar * CALORY_FACTOR || 0;

  /* ******************************** CONSTANTS ******************************* */

  const CALORY_FACTOR = 2.13;
  const MealMertric = {
    MAX_DAILY_CALORIES: 'max-daily-calories',
  };

  /* ********************************** HOOKS ********************************* */
  // State
  const [caloryContribution, setCaloryContribution] = useState(
    defaultCaloryContribution,
  );
  const [isDisplayAsServerd, setIsDisabledAsServed] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const loading = useSelector(selectRecipeLoading);
  const recipe = useSelector(selectRecipeCurrent);

  // Localization
  const { t, i18n } = useTranslation(['Common', 'Meals']);

  // Side-effects
  useEffect(() => {
    if (recipe !== undefined) {
      dispatch($fetchRecipe(recipe?.id));
    }
  }, [recipe]);

  /* ***************************** LOCAL VARIABLES **************************** */

  const computedCalories = caloryContribution * MealMertric.MAX_DAILY_CALORIES;
  const colonSpacing = i18n.language === 'fr-FR' ? ' :' : ':';

  /* ******************************** CALLBACKS ******************************* */

  /**
   * Handles state reset after reset CTA was clicked
   */
  function onPressReset() {
    setCaloryContribution(0);
    setIsDisabledAsServed(false);
  }

  /* **************************** RENDERING HELPERS *************************** */

  /**
   * Displays the reset CTA button depending on the meal display state
   * @returns {React.Element} Reset button or `null`
   */
  function getResetCta() {
    if (isDisplayAsServerd) {
      return (
        <Button
          style={styles.ctaReset}
          status="warning"
          hasTVPreferredFocus
          onPress={onPressReset}
        >
          {t('Meals:MealScreen.cta.reset')}
        </Button>
      );
    }
    return null;
  }

  /* ******************************** RENDERING ******************************* */

  if (loading) {
    return <FeatureLoader />;
  }

  return (
    <View style={styles.<%= h.changeCase.camel(name) %>}>
      <Hero style={styles.hero}>
        <Text style={styles.greetings}>{t('Common:Greetings.hello')}</Text>
        <Text>{format(new Date(), "'Today is a' eeee")}</Text>
        <Text>{t('Meals:MealScreen.introduction.label')}</Text>
        <Text>{t('Meals:MealScreen.introduction.description')}</Text>
      </Hero>
      <Text>{`${t(
        'Meals:MealScreen.result.label',
      )}${colonSpacing} ${computedCalories}`}</Text>
      {getResetCta()}
    </View>
  );
}

<%= h.changeCase.pascal(name) %>.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.oneOf(['spicy', 'asian', 'vegetarian']),
};

<%= h.changeCase.pascal(name) %>.defaultProps = {
  categories: [],
};

export default <%= h.changeCase.pascal(name) %>;
<% } -%>