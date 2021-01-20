import path from 'path';
import { plugins } from './plugins';
import { rules } from './rules';
import { speedMeasurePlugin } from './plugins/speedMeasure';

const rootPath = path.resolve();
const env = process.env.NODE_ENV;
const anaEnv = process.env.ANA_ENV;
const prod = env === 'production';
const ana = anaEnv === 'analytics';

const config = {
  mode: env,
  entry: path.resolve(rootPath, 'src/index.jsx'),
  devtool: false,
  devServer: {
    port: 8080,
    contentBase: path.resolve(rootPath, 'dist'),
    hot: true,
    open: false,
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(rootPath, 'dist'),
    chunkFilename: 'assets/chunks/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules'],
    symlinks: false,
  },
  module: {
    rules,
  },
  optimization: {
    removeAvailableModules: prod,
    removeEmptyChunks: prod,
    mergeDuplicateChunks: prod,
    splitChunks: false,
  },
  plugins,
  stats: {
    children: false,
    chunks: false,
    modules: false,
  },
};

const webpackConfig = ana ? speedMeasurePlugin.wrap(config) : config;

export default webpackConfig;
