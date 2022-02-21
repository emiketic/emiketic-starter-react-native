module.exports = {
  env: {
    node: true,
    es2021: true,
    'react-native/react-native': true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    '@react-native-community',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:mdx/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    react: {
      version: 'detect',
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['react', 'react-native'],
  rules: {
    /* ******************************* FORMATTING ******************************* */

    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': 0,

    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'import/no-unresolved': [2, { ignore: ['@env'] }],

    /* ******************************* JSX / REACT ****************************** */

    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'mdx'] }],
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 0,

    /* ****************************** REACT NATIVE ****************************** */

    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,

    /* ****************************** DEPENDENCIES ****************************** */

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    // Don't lint MDX files in React Native
    {
      files: ['*.mdx'],
      rules: {
        semi: 0,
      },
    },
    // Tolerate globale requires for these configuration files
    {
      files: ['./storybook/storyLoader.js', './jest/setup.js'],
      rules: {
        'global-require': 0,
      },
    },
    // Tolerate non-camelcase variable naming for these files
    // Tolerate i18n hook as default named import
    {
      files: ['./localization/i18n.js'],
      rules: {
        camelcase: 0,
        'import/no-named-as-default-member': 0,
      },
    },
  ],
};
