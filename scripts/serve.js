import esbuild from 'esbuild';

esbuild.serve(
  {
    servedir: 'public',
  },
  {
    entryPoints: ['src/index.js'],
    bundle: true,
    platform: 'browser',
    globalName: 'dayPickr',
    outfile: 'public/daypickr.min.js',
    sourcemap: true,
    minify: false,
    loader: { '.js': 'jsx' },
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    inject: ['src/utils/preact-shim.js'],
  }
);
