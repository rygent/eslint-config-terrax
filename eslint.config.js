import { defineConfig } from 'eslint/config';
import common from './dist/esm/common.mjs';
import node from './dist/esm/node.mjs';
import typescript from './dist/esm/typescript.mjs';
import prettier from './dist/esm/prettier.mjs';

export default defineConfig(
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
	{
		rules: {
			'import-x/no-named-as-default-member': 'off'
		}
	},
	...prettier
);
