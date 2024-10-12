import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: { jsdoc },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',
      'no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/check-param-names': 'warn',
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      'jsdoc/require-param': 'warn',
      'jsdoc/require-returns': 'warn',
    },
  },
];
