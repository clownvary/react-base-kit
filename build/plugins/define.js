import webpack from 'webpack';

const env = process.env.NODE_ENV || 'development';
const apiEnv = process.env.API_ENV || 'mock';

const definitions = {
  'process.env.NODE_ENV': JSON.stringify(env),
  NODE_ENV: JSON.stringify(env),
  __STATIC__: env === 'static',
  __DEV__: env === 'development',
  __PRODUCTION__: env === 'production',
  __TESTING__: env === 'test',
  __MOCKING__: apiEnv === 'mock',
};

export const definePlugin = new webpack.DefinePlugin(definitions);
export default definePlugin;
