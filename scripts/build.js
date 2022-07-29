import esbuild from 'esbuild';
import config from './config';

esbuild.build({
  ...config.node,
});

esbuild.build({
  ...config.browser,
});
