import type { TSESLint } from '@typescript-eslint/utils';
import { fixupPluginRules } from '@eslint/compat';
import pluginNext from '@next/eslint-plugin-next';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

const rules: TSESLint.FlatConfig.Rules = {
	...pluginNext.configs.recommended.rules,

	'react/no-unknown-property': 'off',
	'react/react-in-jsx-scope': 'off',
	'react/prop-types': 'off',
	'react/jsx-no-target-blank': 'off',

	'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
	'jsx-a11y/aria-props': 'warn',
	'jsx-a11y/aria-proptypes': 'warn',
	'jsx-a11y/aria-unsupported-elements': 'warn',
	'jsx-a11y/role-has-required-aria-props': 'warn',
	'jsx-a11y/role-supports-aria-props': 'warn',

	'import-x/no-anonymous-default-export': 'warn',

	'import-x/extensions': 'off'
};

/**
 * The ESLint configuration for usage with [Next.js](https://nextjs.org/).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		plugins: {
			'@next/next': pluginNext,
			'jsx-a11y': fixupPluginRules(pluginJsxA11y)
		},
		rules
	}
];

export default config;
