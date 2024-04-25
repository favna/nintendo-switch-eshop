import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			provider: 'v8',
			enabled: true,
			reporter: ['text', 'lcov', 'clover'],
			include: ['**/src/**'],
			exclude: ['**/documentation/**']
		}
	},
	esbuild: {
		target: 'es2020'
	}
});
