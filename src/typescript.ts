import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

const rules: TSESLint.FlatConfig.Rules = {
	'@typescript-eslint/adjacent-overload-signatures': 'error',
	'@typescript-eslint/array-type': 'off',
	'@typescript-eslint/await-thenable': 'off',
	'@typescript-eslint/ban-ts-comment': [
		'error',
		{
			minimumDescriptionLength: 3,
			'ts-check': true,
			'ts-expect-error': false,
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': true
		}
	],
	'@typescript-eslint/ban-ts-ignore': 'off',
	'@typescript-eslint/class-literal-property-style': 'error',
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/default-param-last': 'error',
	'@typescript-eslint/dot-notation': [
		'error',
		{
			allowKeywords: true,
			allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
			allowPrivateClassPropertyAccess: true
		}
	],
	'@typescript-eslint/explicit-function-return-type': 'off',
	'@typescript-eslint/explicit-member-accessibility': 'error',
	'@typescript-eslint/explicit-module-boundary-types': 'off',
	'@typescript-eslint/init-declarations': 'off',
	'@typescript-eslint/interface-name-prefix': 'off',
	'@typescript-eslint/method-signature-style': 'error',
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/no-base-to-string': 'error',
	'@typescript-eslint/no-confusing-non-null-assertion': 'error',
	'@typescript-eslint/no-dupe-class-members': 'error',
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
	'@typescript-eslint/no-empty-interface': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'@typescript-eslint/no-extraneous-class': 'error',
	'@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],
	'@typescript-eslint/no-for-in-array': 'error',
	'@typescript-eslint/no-implied-eval': 'error',
	'@typescript-eslint/no-invalid-this': 'error',
	'@typescript-eslint/no-invalid-void-type': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-misused-promises': 'off',
	'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-redeclare': 'error',
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-shadow': 'warn',
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	'@typescript-eslint/no-unsafe-argument': 'off',
	'@typescript-eslint/no-unsafe-assignment': 'off',
	'@typescript-eslint/no-unsafe-call': 'off',
	'@typescript-eslint/no-unsafe-enum-comparison': 'off',
	'@typescript-eslint/no-unsafe-member-access': 'off',
	'@typescript-eslint/no-unsafe-return': 'off',
	'@typescript-eslint/no-unused-expressions': 'error',
	'@typescript-eslint/no-unused-vars': [
		'warn',
		{
			vars: 'all',
			args: 'none',
			ignoreRestSiblings: true
		}
	],
	'@typescript-eslint/no-use-before-define': [
		'warn',
		{
			functions: false,
			typedefs: false
		}
	],
	'@typescript-eslint/no-useless-constructor': 'error',
	'@typescript-eslint/only-throw-error': 'error',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/prefer-for-of': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-includes': 'error',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'error',
		{ ignoreConditionalTests: true, ignorePrimitives: { bigint: false, boolean: false, number: false, string: true } }
	],
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/prefer-readonly': 'error',
	'@typescript-eslint/prefer-readonly-parameter-types': 'off',
	'@typescript-eslint/prefer-reduce-type-parameter': 'error',
	'@typescript-eslint/prefer-regexp-exec': 'error',
	'@typescript-eslint/prefer-return-this-type': 'error',
	'@typescript-eslint/promise-function-async': 'off',
	'@typescript-eslint/require-array-sort-compare': 'error',
	'@typescript-eslint/require-await': 'warn',
	'@typescript-eslint/return-await': 'warn',
	'@typescript-eslint/restrict-plus-operands': 'off',
	'@typescript-eslint/restrict-template-expressions': 'off',
	'@typescript-eslint/switch-exhaustiveness-check': 'warn',
	'@typescript-eslint/triple-slash-reference': 'off',
	'@typescript-eslint/unbound-method': 'error',
	'@typescript-eslint/unified-signatures': 'error',

	'default-param-last': 'off',
	'dot-notation': 'off',
	'no-array-constructor': 'off',
	'no-dupe-class-members': 'off',
	'no-empty-function': 'off',
	'no-implied-eval': 'off',
	'no-redeclare': 'off',
	'no-shadow': 'off',
	'no-throw-literal': 'off',
	'no-unused-expressions': 'off',
	'no-unused-vars': 'off',
	'no-useless-constructor': 'off',
	'require-await': 'off',

	'@stylistic/js/block-spacing': 'off',
	'@stylistic/js/brace-style': 'off',
	'@stylistic/js/comma-dangle': 'off',
	'@stylistic/js/comma-spacing': 'off',
	'@stylistic/js/func-call-spacing': 'off',
	'@stylistic/js/key-spacing': 'off',
	'@stylistic/js/keyword-spacing': 'off',
	'@stylistic/js/lines-between-class-members': 'off',
	'@stylistic/js/no-extra-semi': 'off',
	'@stylistic/js/object-curly-newline': 'off',
	'@stylistic/js/object-curly-spacing': 'off',
	'@stylistic/js/quotes': 'off',
	'@stylistic/js/semi': 'off',
	'@stylistic/js/semi-spacing': 'off',
	'@stylistic/js/space-before-blocks': 'off',
	'@stylistic/js/space-before-function-paren': 'off',

	'@stylistic/ts/block-spacing': ['error', 'always'],
	'@stylistic/ts/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@stylistic/ts/comma-dangle': ['error', 'never'],
	'@stylistic/ts/comma-spacing': ['error', { before: false, after: true }],
	'@stylistic/ts/func-call-spacing': ['error', 'never'],
	'@stylistic/ts/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
	'@stylistic/ts/keyword-spacing': [
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
	'@stylistic/ts/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'@stylistic/ts/member-delimiter-style': 'error',
	'@stylistic/ts/no-extra-semi': 'error',
	'@stylistic/ts/object-curly-newline': ['error', { multiline: true, consistent: true }],
	'@stylistic/ts/object-curly-spacing': ['error', 'always'],
	'@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	'@stylistic/ts/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
	'@stylistic/ts/semi-spacing': ['error', { before: false, after: true }],
	'@stylistic/ts/space-before-blocks': ['error', 'always'],
	'@stylistic/ts/space-before-function-paren': [
		'error',
		{
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}
	],
	'@stylistic/ts/type-annotation-spacing': 'error',

	'@stylistic/plus/type-generic-spacing': 'error',
	'@stylistic/plus/type-named-tuple-spacing': 'error',

	'import-x/no-dynamic-require': 'off',
	'import-x/no-unresolved': 'off'
};

const settings: TSESLint.FlatConfig.Settings = {
	'import-x/parsers': {
		'@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts']
	},
	'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
	'import-x/extensions': ['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx'],
	'import-x/resolver': {
		typescript: true,
		node: true
	},
	'import-x/resolver-next': [
		createTypeScriptImportResolver({
			alwaysTryTypes: true,
			project: ['./tsconfig.json', './tsconfig.eslint.json']
		})
	]
};

/**
 * The ESLint configuration for TypeScript.
 */
const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylistic,
	...tseslint.configs.stylisticTypeChecked,
	{
		rules,
		settings
	}
);

export default config;
