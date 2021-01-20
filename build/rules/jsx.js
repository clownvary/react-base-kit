import { INCLUDE_COMMON } from '../utils/config';

export const jsxRule = {
  test: /\.(jsx|js)$/,
  include: INCLUDE_COMMON,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      cacheCompression: false,
    },
  },
};
export default jsxRule;
