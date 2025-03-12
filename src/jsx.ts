import type { TSESLint } from '@typescript-eslint/utils';
import pluginReact from 'eslint-plugin-react';

const rules: TSESLint.FlatConfig.Rules = {
	'react/display-name': 'warn',
	'react/jsx-key': [
		'warn',
		{
			checkFragmentShorthand: true,
			checkKeyMustBeforeSpread: true
		}
	],
	'react/jsx-no-comment-textnodes': 'warn',
	'react/jsx-no-duplicate-props': 'warn',
	'react/jsx-no-target-blank': 'warn',
	'react/jsx-no-undef': 'warn',
	'react/jsx-uses-react': 'off',
	'react/jsx-uses-vars': 'warn',
	'react/no-children-prop': 'warn',
	'react/no-danger-with-children': 'warn',
	'react/no-deprecated': 'warn',
	'react/no-direct-mutation-state': 'warn',
	'react/no-find-dom-node': 'warn',
	'react/no-is-mounted': 'warn',
	'react/no-render-return-value': 'warn',
	'react/no-string-refs': 'warn',
	'react/no-unescaped-entities': 'warn',
	'react/no-unknown-property': 'warn',
	'react/no-unsafe': 'off',
	'react/prop-types': 'warn',
	'react/react-in-jsx-scope': 'off',
	'react/require-render-return': 'warn'
};

const settings: TSESLint.FlatConfig.Settings = {
	'import-x/extensions': ['.js', '.jsx'],
	'import-x/resolver': {
		node: {
			extensions: ['.js', '.jsx']
		}
	}
};

/**
 * The ESLint configuration for usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)).
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			react: pluginReact
		},
		rules,
		settings
	}
];

export default config;
