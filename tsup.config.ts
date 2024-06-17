import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  entry: {
    index: 'src/index.ts',
    functions: 'src/functions.ts',
    models: 'src/models.ts',
    operators: 'src/operators.ts'
  },
  external: [],
  format: ['cjs', 'esm'],
  treeshake: isProduction,
  minify: isProduction,
  sourcemap: isProduction,
  watch,
}));
