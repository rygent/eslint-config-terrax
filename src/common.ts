import type { TSESLint } from '@typescript-eslint/utils';
import eslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import-x';

const rules: TSESLint.FlatConfig.Rules = {
	'accessor-pairs': 'warn',
	'array-callback-return': 'error',
	'arrow-body-style': ['error', 'as-needed'],
	'block-scoped-var': 'error',
	complexity: ['warn', { max: 35 }],
	'consistent-this': ['error', 'self'],
	'constructor-super': 'error',
	curly: ['error', 'multi-line', 'consistent'],
	'default-param-last': 'error',
	'dot-notation': [
		'error',
		{
			allowKeywords: true,
			allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
			allowPrivateClassPropertyAccess: true
		}
	],
	eqeqeq: ['error', 'smart'],
	'func-name-matching': ['warn', 'always'],
	'func-names': ['warn', 'as-needed'],
	'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
	'guard-for-in': 'warn',
	'handle-callback-err': 'error',
	'max-depth': ['error', { max: 5 }],
	'max-nested-callbacks': ['error', { max: 4 }],
	'no-alert': 'error',
	'no-array-constructor': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-catch-shadow': 'error',
	'no-class-assign': 'warn',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'warn',
	'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
	'no-const-assign': 'error',
	'no-debugger': 'error',
	'no-delete-var': 'error',
	'no-dupe-args': 'error',
	'no-dupe-class-members': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-duplicate-imports': 'off',
	'no-else-return': 'warn',
	'no-empty-character-class': 'error',
	'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
	'no-eq-null': 'warn',
	'no-extend-native': 'warn',
	'no-extra-label': 'warn',
	'no-implicit-coercion': 'error',
	'no-implied-eval': 'error',
	'no-inline-comments': 'warn',
	'no-invalid-regexp': 'warn',
	'no-invalid-this': 'off',
	'no-irregular-whitespace': [
		'error',
		{
			skipStrings: true,
			skipComments: true,
			skipRegExps: true,
			skipTemplates: true
		}
	],
	'no-label-var': 'error',
	'no-lone-blocks': 'error',
	'no-lonely-if': 'error',
	'no-mixed-requires': 'error',
	'no-multi-str': 'error',
	'no-new-func': 'warn',
	'no-new-object': 'error',
	'no-new-require': 'error',
	'no-new-symbol': 'warn',
	'no-new-wrappers': 'warn',
	'no-obj-calls': 'warn',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-path-concat': 'error',
	'no-redeclare': 'error',
	'no-regex-spaces': 'warn',
	'no-return-assign': 'error',
	'no-return-await': 'off',
	'no-self-assign': 'error',
	'no-self-compare': 'warn',
	'no-sequences': 'error',
	'no-shadow': 'warn',
	'no-shadow-restricted-names': 'error',
	'no-spaced-func': 'error',
	'no-sparse-arrays': 'warn',
	'no-this-before-super': 'error',
	'no-throw-literal': 'error',
	'no-undef': 'error',
	'no-undef-init': 'error',
	'no-unexpected-multiline': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],
	'no-unreachable': 'warn',
	'no-unsafe-finally': 'warn',
	'no-unsafe-negation': 'error',
	'no-unused-expressions': 'error',
	'no-unused-labels': 'error',
	'no-unused-vars': [
		'warn',
		{
			vars: 'all',
			args: 'none',
			ignoreRestSiblings: true
		}
	],
	'no-useless-call': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-concat': 'warn',
	'no-useless-constructor': 'error',
	'no-useless-escape': 'error',
	'no-useless-rename': 'error',
	'no-useless-return': 'warn',
	'no-var': 'error',
	'no-with': 'error',
	'no-warning-comments': 'warn',
	'one-var': ['error', 'never'],
	'operator-assignment': ['error', 'always'],
	'prefer-arrow-callback': 'error',
	'prefer-const': ['error', { destructuring: 'all' }],
	'prefer-destructuring': [
		'error',
		{
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: true,
				object: false
			}
		},
		{
			enforceForRenamedProperties: false
		}
	],
	'prefer-object-has-own': 'error',
	'prefer-rest-params': 'warn',
	'prefer-spread': 'error',
	'prefer-template': 'warn',
	radix: 'error',
	'require-await': 'warn',
	'require-yield': 'warn',
	strict: ['error', 'never'],
	'symbol-description': 'error',
	'unicode-bom': ['error', 'never'],
	'use-isnan': 'error',
	'valid-typeof': 'error',
	yoda: 'error',

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
	'@stylistic/wrap-iife': ['error', 'inside'],
	'@stylistic/yield-star-spacing': ['error', 'before'],

	'import-x/default': 'error',
	'import-x/export': 'error',
	'import-x/extensions': 'off',
	'import-x/named': 'error',
	'import-x/namespace': 'error',
	'import-x/no-duplicates': 'warn',
	'import-x/no-named-as-default': 'warn',
	'import-x/no-named-as-default-member': 'warn',
	'import-x/no-unresolved': 'off'
};

const settings: TSESLint.FlatConfig.Settings = {
	'import-x/extensions': ['.js'],
	'import-x/resolver': {
		node: {
			extensions: ['.js']
		}
	}
};

const config: TSESLint.FlatConfig.ConfigArray = [
	eslint.configs.recommended,
	{
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				requireConfigFile: false,
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: true
				}
			}
		},
		plugins: {
			'@stylistic': stylisticPlugin,
			'import-x': eslintPluginImport
		},
		rules,
		settings
	}
];

export default config;
