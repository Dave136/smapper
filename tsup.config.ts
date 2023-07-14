import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  dts: './src/types.ts',
  clean: true,
  bundle: true,
  minify: true,
});
