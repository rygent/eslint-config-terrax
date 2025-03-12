import type { TSESLint } from '@typescript-eslint/utils';

const rules: TSESLint.FlatConfig.Rules = {
	'no-restricted-globals': 'off',

	'import-x/extensions': 'off',

	'n/prefer-global/buffer': ['error', 'always'],
	'n/prefer-global/console': ['error', 'always'],
	'n/prefer-global/process': ['error', 'always'],
	'n/prefer-global/text-decoder': ['error', 'always'],
	'n/prefer-global/text-encoder': ['error', 'always'],
	'n/prefer-global/url': ['error', 'always'],
	'n/prefer-global/url-search-params': ['error', 'always']
};

/**
 * The ESLint configuration for usage with edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.
 */
const config: TSESLint.FlatConfig.ConfigArray = [
	{
		rules
	}
];

export default config;
