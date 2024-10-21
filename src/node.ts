import type { TSESLint } from '@typescript-eslint/utils';
import globals from 'globals';

const rules: TSESLint.FlatConfig.Rules = {
	'no-restricted-globals': [
		'error',
		{
			name: 'Buffer',
			message: 'Import Buffer from `node:buffer` instead'
		},
		{
			name: 'process',
			message: 'Import process from `node:process` instead'
		},
		{
			name: 'setTimeout',
			message: 'Import setTimeout from `node:timers` instead'
		},
		{
			name: 'setInterval',
			message: 'Import setInterval from `node:timers` instead'
		},
		{
			name: 'setImmediate',
			message: 'Import setImmediate from `node:timers` instead'
		},
		{
			name: 'clearTimeout',
			message: 'Import clearTimeout from `node:timers` instead'
		},
		{
			name: 'clearInterval',
			message: 'Import clearInterval from `node:timers` instead'
		},
		{
			name: 'clearImmediate',
			message: 'Import clearImmediate from `node:timers` instead'
		}
	],
	'import-x/no-unresolved': 'off'
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2024
			},
			parserOptions: {
				ecmaFeatures: {
					globalReturn: true
				}
			}
		},
		rules
	}
];

export default config;
