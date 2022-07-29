import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  target: 'es2015',
  format: 'cjs',
  outfile: 'public/daypickr.js',
  sourcemap: true,
  loader: { '.js': 'jsx' },
  loader: { '.js': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: ['src/utils/preact-shim.js'],
});

esbuild.build({
  entryPoints: ['src/daypickr-iife.cjs'],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  globalName: 'dayPickr',
  outfile: 'public/daypickr.min.js',
  sourcemap: true,
  // minify: true,
  loader: { '.js': 'jsx', '.cjs': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: ['src/utils/preact-shim.js'],
});
