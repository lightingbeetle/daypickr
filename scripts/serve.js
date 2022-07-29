import esbuild from 'esbuild';
import config from './config.js';

esbuild.serve(
  {
    servedir: 'public',
  },
  {
    ...config.browser,
  }
);
