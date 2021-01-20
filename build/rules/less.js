import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import cssnano from 'cssnano';
import { INCLUDE_COMMON } from '../utils/config';
import { prependLoaders } from '../utils/prependLoaders';

const prod = process.env.NODE_ENV === 'production';
const postcss = () => [
  cssnano({
    autoprefixer: {
      browsers: ['last 2 versions', 'ie 11'],
      add: true,
      remove: true,
    },
  }),
];

const rule = {
  test: /\.less$/,
  include: INCLUDE_COMMON,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: !prod,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: postcss,
        sourceMap: !prod,
      },
    },
    {
      loader: 'less-loader',
      options: {
        sourceMap: !prod,
      },
    },
  ],
};

// cache-loader  must be placed before 'MiniCssExtractPlugin'
export const lessRule = prod
  ? prependLoaders(rule, [MiniCssExtractPlugin.loader])
  : prependLoaders(rule, ['cache-loader', MiniCssExtractPlugin.loader]);

export default lessRule;
