
import js from '@eslint/js';

export default [
  js.configs.recommended,
  "next",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "react"],
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Add custom rules here
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint", "react"],
        extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
        rules: {
          // TypeScript and React-specific rules
        },
      },
    ],
  },
];
