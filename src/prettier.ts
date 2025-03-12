import type { TSESLint } from '@typescript-eslint/utils';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginPrettier from 'eslint-plugin-prettier';

const rules: TSESLint.FlatConfig.Rules = {
	'prettier/prettier': 'error',
	'arrow-body-style': 'off',
	'prefer-arrow-callback': 'off',
	'no-inline-comments': 'off'
};

/**
 * The ESLint configuration for usage with Prettier.
 *
 * @note This configuration should be used in the last configuration array. Otherwise, it might not work as expected.
 * @see https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	eslintConfigPrettier,
	{
		plugins: {
			prettier: pluginPrettier
		},
		rules
	}
];

export default config;
