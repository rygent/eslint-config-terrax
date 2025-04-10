import type { TSESLint } from '@typescript-eslint/utils';
import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error @next/eslint-plugin-next is not typed
import pluginNext from '@next/eslint-plugin-next';
import jsxa11y from './jsx-a11y';

const rules: TSESLint.FlatConfig.Rules = {
	'@next/next/google-font-display': 'warn',
	'@next/next/google-font-preconnect': 'warn',
	'@next/next/inline-script-id': 'error',
	'@next/next/next-script-for-ga': 'warn',
	'@next/next/no-assign-module-variable': 'error',
	'@next/next/no-async-client-component': 'warn',
	'@next/next/no-before-interactive-script-outside-document': 'warn',
	'@next/next/no-css-tags': 'warn',
	'@next/next/no-document-import-in-page': 'error',
	'@next/next/no-duplicate-head': 'error',
	'@next/next/no-head-element': 'warn',
	'@next/next/no-head-import-in-document': 'error',
	'@next/next/no-html-link-for-pages': 'error',
	'@next/next/no-img-element': 'warn',
	'@next/next/no-page-custom-font': 'warn',
	'@next/next/no-script-component-in-head': 'error',
	'@next/next/no-styled-jsx-in-document': 'warn',
	'@next/next/no-sync-scripts': 'error',
	'@next/next/no-title-in-document-head': 'warn',
	'@next/next/no-typos': 'warn',
	'@next/next/no-unwanted-polyfillio': 'warn',

	'import-x/extensions': 'off'
};

/**
 * The ESLint configuration for usage with [Next.js](https://nextjs.org/).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			'@next/next': fixupPluginRules(pluginNext)
		},
		rules
	},
	...jsxa11y
];

export default config;
