import type { TSESLint } from '@typescript-eslint/utils';
import eslintPluginImportX from 'eslint-plugin-import-x';
import globals from 'globals';

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
	'for-direction': 'error',
	'func-name-matching': ['warn', 'always'],
	'func-names': ['warn', 'as-needed'],
	'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
	'getter-return': 'error',
	'guard-for-in': 'warn',
	'handle-callback-err': 'error',
	'max-depth': ['error', { max: 5 }],
	'max-nested-callbacks': ['error', { max: 4 }],
	'no-alert': 'error',
	'no-array-constructor': 'error',
	'no-async-promise-executor': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-catch-shadow': 'error',
	'no-class-assign': 'warn',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'warn',
	'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
	'no-const-assign': 'error',
	'no-constant-binary-expression': 'error',
	'no-constant-condition': 'error',
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-delete-var': 'error',
	'no-dupe-args': 'error',
	'no-dupe-class-members': 'error',
	'no-dupe-else-if': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-duplicate-imports': 'off',
	'no-else-return': 'warn',
	'no-empty': 'error',
	'no-empty-character-class': 'error',
	'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
	'no-empty-pattern': 'error',
	'no-empty-static-block': 'error',
	'no-eq-null': 'warn',
	'no-ex-assign': 'error',
	'no-extend-native': 'warn',
	'no-extra-boolean-cast': 'error',
	'no-extra-label': 'warn',
	'no-fallthrough': 'error',
	'no-func-assign': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implied-eval': 'error',
	'no-import-assign': 'error',
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
	'no-loss-of-precision': 'error',
	'no-misleading-character-class': 'error',
	'no-mixed-requires': 'error',
	'no-multi-str': 'error',
	'no-new-func': 'warn',
	'no-new-native-nonconstructor': 'error',
	'no-new-object': 'error',
	'no-new-require': 'error',
	'no-new-symbol': 'warn',
	'no-new-wrappers': 'warn',
	'no-nonoctal-decimal-escape': 'error',
	'no-obj-calls': 'warn',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-path-concat': 'error',
	'no-prototype-builtins': 'error',
	'no-redeclare': 'error',
	'no-regex-spaces': 'warn',
	'no-return-assign': 'error',
	'no-return-await': 'off',
	'no-self-assign': 'error',
	'no-self-compare': 'warn',
	'no-sequences': 'error',
	'no-setter-return': 'error',
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
	'no-unsafe-optional-chaining': 'error',
	'no-unused-expressions': 'error',
	'no-unused-labels': 'error',
	'no-unused-private-class-members': 'error',
	'no-unused-vars': [
		'warn',
		{
			vars: 'all',
			args: 'none',
			ignoreRestSiblings: true
		}
	],
	'no-useless-backreference': 'error',
	'no-useless-call': 'error',
	'no-useless-catch': 'error',
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
	yoda: 'error'
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
	{
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2024
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				requireConfigFile: false,
				ecmaFeatures: {
					globalReturn: true,
					impliedStrict: true
				}
			}
		},
		plugins: {
			'import-x': eslintPluginImportX
		},
		rules,
		settings
	}
];

export default config;
