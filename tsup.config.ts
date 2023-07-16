import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  target: 'es6',
  dts: true,
  clean: true,
  bundle: true,
  minify: true,
  noExternal: ['lodash'],
});
