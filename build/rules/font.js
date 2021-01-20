import { INCLUDE_COMMON } from '../utils/config';

export const fontRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  include: INCLUDE_COMMON,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 8000,
        name: 'assets/fonts/[name].[ext]',
      },
    },
  ],
};
export default fontRule;
