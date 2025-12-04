import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { 
      js,
      prettier: prettierPlugin
    },
    extends: ['js/recommended', prettierConfig],
    languageOptions: { globals: globals.browser },
  },

  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.jsx'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',
      'no-else-return': 'warn',
    },
  },
])
