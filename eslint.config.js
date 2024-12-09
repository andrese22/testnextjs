import eslintJs from '@eslint/js';
import react from 'eslint-plugin-react';
import stylisticJs from '@stylistic/eslint-plugin-js';
import prettierConfig from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const flatCompat = new FlatCompat();

export default [
  eslintJs.configs.recommended,
  react.configs.flat.recommended,
  prettierConfig,
  ...fixupConfigRules(flatCompat.extends('plugin:@next/next/core-web-vitals')),
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    plugins: {
      react,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'array-bracket-spacing': 'error',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'max-len': ['error', { code: 110, ignorePattern: '^import .*|^export .*' }],
      'no-console': 'error',
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: { consistent: true, minProperties: 0 },
        },
      ],
      'operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'never', prev: 'export', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'if' },
      ],
      'react/forbid-prop-types': [
        'warn',
        { checkContextTypes: true, checkChildContextTypes: true },
      ],
      'react/forbid-dom-props': ['error', { forbid: ['style'] }],
      semi: 'error',
      'space-infix-ops': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
];
