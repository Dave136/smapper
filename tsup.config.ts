import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  bundle: true,
  minify: true,
});
