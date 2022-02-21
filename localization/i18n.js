import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* -------------------------------------------------------------------------- */
/*            Update list of available locales and namespaces below           */
/* -------------------------------------------------------------------------- */

/**
 * Each new locale to be supported must be added here. Make sure
 * the locale folder (Ex: `it-IT`) is added to `/localization` and
 * that it contains all the translation files found for other locales
 */
const LOCALES = ['fr-FR', 'en-US'];

/**
 * Import each translation file to a variable following this format:
 * `FeatureName_ln_CT`
 * Each screen must be translated within its correspondant feauture
 * translation file in `/localization/ln-CT/FeatureName.json`.
 * By default and by convention, there is at least a `Common`
 * namespace exposed where all common entries are translated (Ex: yes, no)
 */
const Common_en_US = require('./en-US/Common.json');
const Common_fr_FR = require('./fr-FR/Common.json');
const Auth_en_US = require('./en-US/Auth.json');
const Auth_fr_FR = require('./fr-FR/Auth.json');

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'fr-FR',
  supportedLngs: LOCALES,
  resources: {
    'en-US': {
      Common: Common_en_US,
      Auth: Auth_en_US,
    },
    'fr-FR': {
      Common: Common_fr_FR,
      Auth: Auth_fr_FR,
    },
  },
  debug: false,
  load: 'currentOnly',
  defaultNS: 'Common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
