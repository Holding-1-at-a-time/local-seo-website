import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  nextConfig,
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
    },
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
    },
    parser: tsParser,
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];