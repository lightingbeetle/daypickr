import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  target: 'es2015',
  format: 'cjs',
  outfile: 'public/daypicker.js',
  sourcemap: true,
  loader: { '.js': 'jsx' },
  loader: { '.js': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: ['src/utils/preact-shim.js'],
});

esbuild.build({
  entryPoints: ['src/daypicker-iife.cjs'],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  globalName: 'dayPicker',
  outfile: 'public/daypicker.min.js',
  sourcemap: true,
  // minify: true,
  loader: { '.js': 'jsx', '.cjs': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: ['src/utils/preact-shim.js'],
});
