import esbuild from 'esbuild';

esbuild.serve(
  {
    servedir: 'public',
  },
  {
    entryPoints: ['src/index.js'],
    bundle: true,
    platform: 'browser',
    globalName: 'dayPicker',
    outfile: 'public/daypicker.min.js',
    sourcemap: true,
    minify: false,
    loader: { '.js': 'jsx' },
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    inject: ['src/utils/preact-shim.js'],
  }
);
