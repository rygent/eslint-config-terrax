import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import stylisticPlugin from '@stylistic/eslint-plugin';

const rules: TSESLint.FlatConfig.Rules = {
	'@stylistic/array-bracket-newline': ['error', 'consistent'],
	'@stylistic/array-bracket-spacing': [
		'error',
		'never',
		{
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false
		}
	],
	'@stylistic/arrow-spacing': ['error', { before: true, after: true }],
	'@stylistic/block-spacing': ['error', 'always'],
	'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@stylistic/comma-dangle': ['error', 'never'],
	'@stylistic/comma-spacing': ['error', { before: false, after: true }],
	'@stylistic/comma-style': ['error', 'last'],
	'@stylistic/computed-property-spacing': ['error', 'never'],
	'@stylistic/dot-location': ['error', 'property'],
	'@stylistic/eol-last': ['error', 'always'],
	'@stylistic/func-call-spacing': ['error', 'never'],
	'@stylistic/generator-star-spacing': ['error', 'before'],
	'@stylistic/jsx-quotes': ['error', 'prefer-double'],
	'@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
	'@stylistic/keyword-spacing': [
		'error',
		{
			overrides: {
				if: {
					after: true
				},
				for: {
					after: true
				},
				while: {
					after: true
				},
				catch: {
					after: true
				},
				switch: {
					after: true
				}
			}
		}
	],
	'@stylistic/linebreak-style': ['error', 'unix'],
	'@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'@stylistic/max-len': [
		'error',
		{
			code: 150,
			tabWidth: 2,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}
	],
	'@stylistic/max-statements-per-line': ['error', { max: 2 }],
	'@stylistic/member-delimiter-style': 'error',
	'@stylistic/multiline-ternary': ['error', 'always-multiline'],
	'@stylistic/new-parens': 'error',
	'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 6 }],
	'@stylistic/no-extra-semi': 'error',
	'@stylistic/no-floating-decimal': 'error',
	'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
	'@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
	'@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
	'@stylistic/no-trailing-spaces': 'error',
	'@stylistic/no-whitespace-before-property': 'error',
	'@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
	'@stylistic/padded-blocks': ['error', 'never'],
	'@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	'@stylistic/rest-spread-spacing': ['error', 'never'],
	'@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
	'@stylistic/semi-spacing': ['error', { before: false, after: true }],
	'@stylistic/semi-style': ['error', 'last'],
	'@stylistic/space-before-blocks': ['error', 'always'],
	'@stylistic/space-before-function-paren': [
		'error',
		{
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}
	],
	'@stylistic/space-in-parens': ['error', 'never'],
	'@stylistic/space-infix-ops': ['error', { int32Hint: true }],
	'@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
	'@stylistic/spaced-comment': ['error', 'always'],
	'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
	'@stylistic/template-curly-spacing': ['error', 'never'],
	'@stylistic/template-tag-spacing': ['error', 'never'],
	'@stylistic/type-annotation-spacing': 'error',
	'@stylistic/wrap-iife': ['error', 'inside'],
	'@stylistic/yield-star-spacing': ['error', 'before']
};

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
	...tseslint.configs.stylistic,
	...tseslint.configs.stylisticTypeChecked,
	{
		plugins: {
			'@stylistic': stylisticPlugin
		},
		rules
	}
);

export default config;
