import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import browsersync from 'rollup-plugin-browsersync';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/daypickr.js',
  output: {
    file: 'public/daypickr.js',
    format: 'umd',
    name: 'dayPickr',
    sourcemap: true,
    exports: 'default',
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    !production && browsersync({ server: 'public', files: ['public/*'] }),
    production && terser(), // minify, but only in production
  ],
  watch: {
    include: 'src/**',
  },
};
