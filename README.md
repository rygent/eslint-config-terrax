<div align="center">

# Terrax ESLint Config

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities?style=flat-square&color=blue&logo=github)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)
[![npm version](https://img.shields.io/npm/v/eslint-config-terrax.svg?maxAge=3600&logo=npm&style=flat-square)](https://www.npmjs.com/package/eslint-config-terrax)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-terrax.svg?maxAge=3600&logo=npm&style=flat-square&color=crimson)](https://www.npmjs.com/package/eslint-config-terrax)

</div>

_This config was inspired by [eslint-config-neon](https://github.com/iCrawl/eslint-config-neon) and [eslint-config-tesseract](https://github.com/MenuDocs/eslint-config-tesseract)._

## Installation

```sh
# NPM
npm install -D eslint eslint-config-terrax

# Yarn
yarn add -D eslint eslint-config-terrax

# PNPM
pnpm add -D eslint eslint-config-terrax
```

## Configurations

Package includes the following configurations:

| Configuration                                            | Description                                                                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`eslint-config-terrax/common`](./src/common.ts)         | The terrax code style guide.                                                                                                                                                                              |
| [`eslint-config-terrax/browser`](./src/browser.ts)       | For usage with DOM and other browser APIs.                                                                                                                                                                |
| [`eslint-config-terrax/edge`](./src/edge.ts)             | For usage with an edge runtime [Vercel](https://vercel.com/blog/introducing-the-edge-runtime), [Cloudflare Workers](https://workers.cloudflare.com/), or others.                                          |
| [`eslint-config-terrax/jsx`](./src/jsx.ts)               | For usage with [JSX](https://reactjs.org/docs/introducing-jsx.html) (with or without [React](https://reactjs.org/)).                                                                                      |
| [`eslint-config-terrax/jsx-a11y`](./src/jsx-a11y.ts)     | For usage with [JSX](https://facebook.github.io/react/) (with or without [React](https://reactjs.org/)) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y). |
| [`eslint-config-terrax/next`](./src/next.ts)             | For usage with [Next.js](https://nextjs.org/).                                                                                                                                                            |
| [`eslint-config-terrax/node`](./src/node.ts)             | For usage with Node.js.                                                                                                                                                                                   |
| [`eslint-config-terrax/prettier`](./src/prettier.ts)     | For usage with [Prettier](https://prettier.io/).                                                                                                                                                          |
| [`eslint-config-terrax/react`](./src/react.ts)           | For usage with [React](https://reactjs.org/).                                                                                                                                                             |
| [`eslint-config-terrax/typescript`](./src/typescript.ts) | For usage with [TypeScript](http://typescriptlang.org/).                                                                                                                                                  |

## Notes

### Flat Config only

It is important to note that this package only exports [ESLint Flat Config][]! This means that you _have_ to use at least ESLint 9 and `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs` to use this package. See the ESLint documentation on flat config for more information.

### Importing

There are two ways to import the configs:

```ts
import common from 'eslint-config-terrax/common';
```

or

```ts
import { common } from 'eslint-config-terrax';
```

### Merging Configs

In the examples below you will see `lodash.merge` being used. This is of vital importance as objects often have to be deeply merged when using ESLint Flat Config. If you don't merge the objects, you will overwrite the previous object with the new one, and your config will be invalid.

## Usage

### NodeJS

```js
import { common, node, typescript } from 'eslint-config-terrax';
import merge from 'lodash.merge';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
    ...[...common, ...node, ...typescript].map((config) =>
        merge(config, {
            files: ['src/**/*.ts'],
            languageOptions: {
                parserOptions: {
                    project: 'tsconfig.eslint.json'
                }
            }
        })
    )
];

export default config;
```

### NextJS

```js
import { browser, common, edge, next, node, react, typescript } from 'eslint-config-terrax';
import merge from 'lodash.merge';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
    ...[...common, ...browser, ...node, ...typescript, ...react, ...next, ...edge].map((config) =>
        merge(config, {
            files: ['src/**/*.ts'],
            settings: {
                react: {
                    version: 'detect'
                }
            },
            languageOptions: {
                parserOptions: {
                    project: 'tsconfig.json'
                }
            }
        })
    )
];

export default config;
```

### Usage with Prettier

Just add it as the last config in your `extends` configuration, e.g.

```js
import { common, typescript, prettier } from 'eslint-config-terrax';

export default [...common, ...typescript, ...prettier];
```

[ESLint Flat Config]: https://eslint.org/blog/2022/08/new-config-system-part-2/
