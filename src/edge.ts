import type { TSESLint } from '@typescript-eslint/utils';

const rules: TSESLint.FlatConfig.Rules = {
	'import-x/extensions': 'off',
	'no-restricted-globals': 'off'
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules
	}
];

export default config;
