import webpack from 'webpack';
import { styleConfig } from '../utils/config';

export const cssSourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({
  test: /\.(le|c)ss$/,
  filename: styleConfig.STYLE_SOURCE_MAP_PATH,
  exclude: /node_modules/,
  module: true,
  columns: true,
});
export const jsSourceMapDevToolPlugin = new webpack.EvalSourceMapDevToolPlugin({
  test: /\.js[x]?$/,
  include: /src/,
  exclude: [/node_modules/],
  module: true,
  columns: false,
});

export default { cssSourceMapDevToolPlugin, jsSourceMapDevToolPlugin };
