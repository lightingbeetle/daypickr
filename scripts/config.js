const commonConfig = {
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: { '.js': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  inject: ['src/utils/preact-shim.js'],
  sourcemap: true,
};

export default {
  browser: {
    ...commonConfig,
    format: 'iife',
    platform: 'browser',
    globalName: 'dayPickr',
    outfile: 'public/daypickr.min.js',
    minify: true,
  },
  node: {
    ...commonConfig,
    platform: 'node',
    target: 'node14',
    outfile: 'public/daypickr.js',
  },
};
