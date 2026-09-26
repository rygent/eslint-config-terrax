import { defineConfig, type UserConfig } from 'tsdown';

const baseOptions: UserConfig = {
	clean: true,
	dts: true,
	entry: ['src/*.ts'],
	minify: false,
	deps: {
		neverBundle: true
	},
	outputOptions: {
		keepNames: true
	},
	sourcemap: true,
	unbundle: false,
	target: 'esnext',
	tsconfig: './tsconfig.json',
	treeshake: true,
	logLevel: 'error'
};

export default [
	defineConfig({
		...baseOptions,
		outDir: 'dist/cjs',
		format: 'cjs',
		outputOptions: {
			esModule: false
		}
	}),
	defineConfig({
		...baseOptions,
		outDir: 'dist/esm',
		format: 'esm',
		outExtensions: () => ({ js: '.mjs' })
	})
];
