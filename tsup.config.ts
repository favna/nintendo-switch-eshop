import { defineConfig, type Options } from 'tsup';

const baseOptions: Options = {
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	minify: false,
	sourcemap: true,
	target: 'es2020',
	tsconfig: 'src/tsconfig.json',
	keepNames: true,
	treeshake: true
};

export default [
	defineConfig({
		...baseOptions,
		outDir: 'dist/cjs',
		format: 'cjs',
		outExtension: () => ({ js: '.cjs' })
	}),
	defineConfig({
		...baseOptions,
		outDir: 'dist/esm',
		format: 'esm',
		outExtension: () => ({ js: '.mjs' })
	}),
	defineConfig({
		...baseOptions,
		globalName: 'NintendoSwitchEshop',
		dts: false,
		minify: true,
		outDir: 'dist/iife',
		format: 'iife'
	})
];
