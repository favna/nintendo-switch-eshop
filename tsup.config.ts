import { defineConfig as defineTsupConfig } from 'tsup';

export default defineTsupConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2020',
  tsconfig: 'src/tsconfig.json',
  keepNames: true
});
