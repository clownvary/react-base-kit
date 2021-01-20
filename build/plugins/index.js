import { definePlugin } from './define';
import { htmlWebpackPlugin } from './htmlWebpack';
import { miniCssExtractPlugin } from './miniCssExtract';
import { optimizeCssAssetsPlugin } from './optimizeCssAssets';
import { jQueryProvidePlugin } from './jQueryProvide';
import { progressBarPlugin } from './progressBar';
import { bundleAnalyzerPlugin } from './bundleAnalyzer';
import { cleanWebpackPlugin } from './cleanWebpack';
import { cssSourceMapDevToolPlugin, jsSourceMapDevToolPlugin } from './sourceMapDevTool';

const prod = process.env.NODE_ENV === 'production';
const dev = process.env.NODE_ENV === 'development';
const ana = process.env.ANA_ENV === 'analytics';

const getPlugins = () => {
  const result = [
    cleanWebpackPlugin,
    definePlugin,
    miniCssExtractPlugin,
    jQueryProvidePlugin,
    progressBarPlugin,
    htmlWebpackPlugin,
  ];

  if (dev) {
    // source map plugins must be placed before related file plugin like 'miniCssExtractPlugin'.
    result.unshift(jsSourceMapDevToolPlugin);
    result.unshift(cssSourceMapDevToolPlugin);
  }
  if (prod) {
    result.push(optimizeCssAssetsPlugin);
  }
  if (ana) {
    result.push(bundleAnalyzerPlugin);
  }

  return result;
};

export const plugins = getPlugins();
export default plugins;
