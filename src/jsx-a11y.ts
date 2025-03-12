import type { TSESLint } from '@typescript-eslint/utils';
import type { ESLint } from 'eslint';
import { fixupPluginRules } from '@eslint/compat';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

const rules: TSESLint.FlatConfig.Rules = {
	'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
	'jsx-a11y/aria-props': 'warn',
	'jsx-a11y/aria-proptypes': 'warn',
	'jsx-a11y/aria-unsupported-elements': 'warn',
	'jsx-a11y/role-has-required-aria-props': 'warn',
	'jsx-a11y/role-supports-aria-props': 'warn'
};

/**
 * The ESLint configuration for usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			'jsx-a11y': fixupPluginRules(pluginJsxA11y as ESLint.Plugin)
		},
		rules
	}
];

export default config;
