import esbuild from 'esbuild';
import config from './config.js';

esbuild.build({
  ...config.node,
});

esbuild.build({
  ...config.browser,
});

esbuild.build({
  ...config.esm,
});
