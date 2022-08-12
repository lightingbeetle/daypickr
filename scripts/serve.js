import esbuildServe from 'esbuild-serve';
import config from './config.js';

esbuildServe(
  {
    ...config.browser,
  },
  {
    port: '8000',
    root: './public',
  }
);
