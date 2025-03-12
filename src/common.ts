import type { TSESLint } from '@typescript-eslint/utils';
import eslint from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginStylisticTs from '@stylistic/eslint-plugin-ts';
import pluginStylisticPlus from '@stylistic/eslint-plugin-plus';
import pluginImport from 'eslint-plugin-import-x';

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

	'@stylistic/js/array-bracket-newline': ['error', 'consistent'],
	'@stylistic/js/array-bracket-spacing': [
		'error',
		'never',
		{
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false
		}
	],
	'@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
	'@stylistic/js/block-spacing': ['error', 'always'],
	'@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'@stylistic/js/comma-dangle': ['error', 'never'],
	'@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
	'@stylistic/js/comma-style': ['error', 'last'],
	'@stylistic/js/computed-property-spacing': ['error', 'never'],
	'@stylistic/js/dot-location': ['error', 'property'],
	'@stylistic/js/eol-last': ['error', 'always'],
	'@stylistic/js/func-call-spacing': ['error', 'never'],
	'@stylistic/js/generator-star-spacing': ['error', 'before'],
	'@stylistic/js/jsx-quotes': ['error', 'prefer-double'],
	'@stylistic/js/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
	'@stylistic/js/keyword-spacing': [
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
	'@stylistic/js/linebreak-style': ['error', 'unix'],
	'@stylistic/js/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'@stylistic/js/max-len': [
		'error',
		{
			code: 150,
			tabWidth: 2,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}
	],
	'@stylistic/js/max-statements-per-line': ['error', { max: 2 }],
	'@stylistic/js/multiline-ternary': ['error', 'always-multiline'],
	'@stylistic/js/new-parens': 'error',
	'@stylistic/js/newline-per-chained-call': ['error', { ignoreChainWithDepth: 6 }],
	'@stylistic/js/no-extra-semi': 'error',
	'@stylistic/js/no-floating-decimal': 'error',
	'@stylistic/js/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
	'@stylistic/js/no-multi-spaces': ['error', { ignoreEOLComments: true }],
	'@stylistic/js/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
	'@stylistic/js/no-trailing-spaces': 'error',
	'@stylistic/js/no-whitespace-before-property': 'error',
	'@stylistic/js/object-curly-newline': ['error', { multiline: true, consistent: true }],
	'@stylistic/js/object-curly-spacing': ['error', 'always'],
	'@stylistic/js/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
	'@stylistic/js/padded-blocks': ['error', 'never'],
	'@stylistic/js/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	'@stylistic/js/rest-spread-spacing': ['error', 'never'],
	'@stylistic/js/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
	'@stylistic/js/semi-spacing': ['error', { before: false, after: true }],
	'@stylistic/js/semi-style': ['error', 'last'],
	'@stylistic/js/space-before-blocks': ['error', 'always'],
	'@stylistic/js/space-before-function-paren': [
		'error',
		{
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}
	],
	'@stylistic/js/space-in-parens': ['error', 'never'],
	'@stylistic/js/space-infix-ops': ['error', { int32Hint: true }],
	'@stylistic/js/space-unary-ops': ['error', { words: true, nonwords: false }],
	'@stylistic/js/spaced-comment': ['error', 'always'],
	'@stylistic/js/switch-colon-spacing': ['error', { after: true, before: false }],
	'@stylistic/js/template-curly-spacing': ['error', 'never'],
	'@stylistic/js/template-tag-spacing': ['error', 'never'],
	'@stylistic/js/wrap-iife': ['error', 'inside'],
	'@stylistic/js/yield-star-spacing': ['error', 'before'],

	'@stylistic/plus/curly-newline': ['error', { multiline: true }],

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
			'@stylistic/js': pluginStylistic,
			'@stylistic/ts': pluginStylisticTs,
			'@stylistic/plus': pluginStylisticPlus,
			'import-x': pluginImport
		},
		rules,
		settings
	}
];

export default config;
