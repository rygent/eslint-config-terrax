import type { TSESLint } from '@typescript-eslint/utils';
// @ts-expect-error TS7016: eslint-config-prettier is not typed
import eslintConfigPrettier from 'eslint-config-prettier';

const rules: TSESLint.FlatConfig.Rules = {
	...eslintConfigPrettier.rules,
	'line-comment-position': 'off',
	'no-inline-comments': 'off'
};

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules
	}
];

export default config;
