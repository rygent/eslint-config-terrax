import type { TSESLint } from '@typescript-eslint/utils';
import globals from 'globals';

const config: TSESLint.FlatConfig.ConfigArray = [
	{
		languageOptions: {
			globals: globals.browser
		}
	}
];

export default config;
