import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import stylistic from './stylistic';

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
	...tseslint.configs.stylistic,
	...tseslint.configs.stylisticTypeChecked,
	...stylistic
);

export default config;
