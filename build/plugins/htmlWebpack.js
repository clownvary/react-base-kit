import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootPath = path.resolve();
export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: path.resolve(rootPath, 'src/index.html'),
});

export default htmlWebpackPlugin;
