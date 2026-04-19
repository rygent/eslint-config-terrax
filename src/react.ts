import type { TSESLint } from '@typescript-eslint/utils';
import { fixupPluginRules } from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const rules: TSESLint.FlatConfig.Rules = {
	...pluginReact.configs.recommended.rules,
	...pluginReactHooks.configs.recommended.rules
};

const settings: TSESLint.FlatConfig.Settings = {
	react: {
		version: 'detect'
	},
	'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx'],
	'import-x/parsers': {
		'@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.d.ts']
	},
	'import-x/resolver': {
		node: {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
		typescript: {
			alwaysTryTypes: true
		}
	}
};

/**
 * The ESLint configuration for usage with [React](https://reactjs.org/).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...globals.browser
			}
		},
		plugins: {
			react: fixupPluginRules(pluginReact),
			'react-hooks': pluginReactHooks
		},
		rules,
		settings
	}
];

export default config;
