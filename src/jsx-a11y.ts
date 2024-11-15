import type { TSESLint } from '@typescript-eslint/utils';
import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error eslint-plugin-jsx-a11y is not typed
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

const rules: TSESLint.FlatConfig.Rules = {
	'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
	'jsx-a11y/aria-props': 'warn',
	'jsx-a11y/aria-proptypes': 'warn',
	'jsx-a11y/aria-unsupported-elements': 'warn',
	'jsx-a11y/role-has-required-aria-props': 'warn',
	'jsx-a11y/role-supports-aria-props': 'warn'
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			'jsx-a11y': fixupPluginRules(eslintPluginJsxA11y)
		},
		rules
	}
];

export default config;
