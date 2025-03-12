import type { TSESLint } from '@typescript-eslint/utils';
import pluginNode from 'eslint-plugin-n';
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

	'import-x/no-unresolved': 'off',

	'n/no-deprecated-api': 'error',
	'n/no-exports-assign': 'error',
	'n/no-extraneous-import': 'off',
	'n/no-extraneous-require': 'off',
	'n/no-missing-import': 'off',
	'n/no-missing-require': 'off',
	'n/no-process-exit': 'off',
	'n/no-unpublished-bin': 'error',
	'n/no-unpublished-import': 'off',
	'n/no-unpublished-require': 'off',
	'n/no-unsupported-features/es-builtins': 'off',
	'n/no-unsupported-features/es-syntax': 'off',
	'n/no-unsupported-features/node-builtins': 'off',
	'n/prefer-global/buffer': ['error', 'never'],
	'n/prefer-global/console': ['error', 'always'],
	'n/prefer-global/process': ['error', 'never'],
	'n/prefer-global/text-decoder': ['error', 'never'],
	'n/prefer-global/text-encoder': ['error', 'never'],
	'n/prefer-global/url': ['error', 'never'],
	'n/prefer-global/url-search-params': ['error', 'never'],
	'n/prefer-node-protocol': 'warn'
};

/**
 * The ESLint configuration for usage with Node.
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: {
				...globals.es2021,
				...globals.es2025,
				...globals.commonjs,
				...globals.node,
				...globals.nodeBuiltin
			},
			parserOptions: {
				ecmaFeatures: {
					globalReturn: true
				}
			}
		},
		plugins: {
			n: pluginNode
		},
		rules
	}
];

export default config;
