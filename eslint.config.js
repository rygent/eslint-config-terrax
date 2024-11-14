import tseslint from 'typescript-eslint';
import common from './dist/esm/common.mjs';
import node from './dist/esm/node.mjs';
import typescript from './dist/esm/typescript.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
	...common,
	...node,
	...typescript,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.eslint.json'
			}
		}
	},
	eslintPluginPrettierRecommended
);
