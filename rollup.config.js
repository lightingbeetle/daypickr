import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import browsersync from 'rollup-plugin-browsersync';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/daypicker.js',
  output: {
    file: 'public/daypicker.js',
    format: 'umd',
    name: 'dayPicker',
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
