# Terrax ESLint Config

<div align="center">
 <br />
 <p>
  <a href="https://www.npmjs.com/package/eslint-config-terrax"><img src="https://img.shields.io/npm/v/eslint-config-terrax.svg?maxAge=3600&logo=npm&style=for-the-badge" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-terrax"><img src="https://img.shields.io/npm/dt/eslint-config-terrax.svg?maxAge=3600&logo=npm&style=for-the-badge" alt="npm downloads" /></a>
 </p>
</div>

## Installation

terrax comes as a complete package, none of the configs require any additional dependecies.

```sh-session
npm install eslint eslint-config-terrax
yarn add eslint eslint-config-terrax
pnpm add eslint eslint-config-terrax
```

> [!IMPORTANT]
> **Flat Config only**
>
> It is important to note that this package only exports [ESLint Flat Config][]! This means that you _have_ to use `eslint.config.js`, `eslint.config.mjs`, or `eslint.config.cjs` to use this package. See the ESLint documentation on flat config for more information.

## Configuration

```js
import { common, stylistic, typescript, prettier } from 'eslint-config-terrax';

export default [
    {
        ignore: ['**/dist/*']
    },
    ...common,
    ...typescript,
    ...stylistic,
    {
        languageOptions: {
            project: './tsconfig.json'
        }
    },
    ...prettier
];
```

[ESLint Flat Config]: https://eslint.org/blog/2022/08/new-config-system-part-2/
