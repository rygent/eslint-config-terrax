import type { TSESLint } from '@typescript-eslint/utils';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginPrettier from 'eslint-plugin-prettier';

const rules: TSESLint.FlatConfig.Rules = {
	'prettier/prettier': 'error',
	'arrow-body-style': 'off',
	'prefer-arrow-callback': 'off',
	'no-inline-comments': 'off'
};

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
