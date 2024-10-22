import { fixupPluginRules } from '@eslint/compat';
import type { TSESLint } from '@typescript-eslint/utils';
import eslintPluginReact from 'eslint-plugin-react';
// @ts-expect-error eslint-plugin-react-hooks is not typed
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

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

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		...eslintPluginReact.configs.flat.recommended,
		...eslintPluginReact.configs.flat['jsx-runtime'],
		plugins: {
			'react-hooks': fixupPluginRules(eslintPluginReactHooks)
		},
		rules,
		settings
	}
];

export default config;
