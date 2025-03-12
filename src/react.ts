import type { TSESLint } from '@typescript-eslint/utils';
import { fixupPluginRules } from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
// eslint-disable-next-line import-x/default
import pluginReactHooks from 'eslint-plugin-react-hooks';
import jsx from './jsx';

const rules: TSESLint.FlatConfig.Rules = {
	'react/no-unknown-property': 'off',
	'react/react-in-jsx-scope': 'off',
	'react/prop-types': 'off',
	'react/jsx-no-target-blank': 'off',

	'react-hooks/rules-of-hooks': 'error',
	'react-hooks/exhaustive-deps': 'warn'
};

const settings: TSESLint.FlatConfig.Settings = {
	react: {
		version: 'detect'
	}
};

/**
 * The ESLint configuration for usage with [React](https://reactjs.org/).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	...jsx,
	{
		plugins: {
			react: pluginReact,
			'react-hooks': fixupPluginRules(pluginReactHooks)
		},
		rules,
		settings
	}
];

export default config;
