import webpack from 'webpack';

export const jQueryProvidePlugin = new webpack.ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  jquery: 'jquery',
});

export default jQueryProvidePlugin;
