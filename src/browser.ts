import type { TSESLint } from '@typescript-eslint/utils';
import globals from 'globals';

/**
 * The ESLint configuration for usage with DOM and other browser APIs.
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: globals.browser
		}
	}
];

export default config;
