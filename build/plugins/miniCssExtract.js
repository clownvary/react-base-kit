import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'assets/styles/[name].css',
  chunkFilename: '[id].css',
});

export default miniCssExtractPlugin;
