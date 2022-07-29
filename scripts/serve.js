import esbuild from 'esbuild';
import config from './config';

esbuild.serve(
  {
    servedir: 'public',
  },
  {
    ...config.browser,
  }
);
