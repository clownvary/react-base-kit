import { INCLUDE_COMMON } from '../utils/config';

export const imageRule = {
  test: /\.(png|jpg|gif|svg)$/,
  include: INCLUDE_COMMON,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 2000,
        name: 'assets/images/[name].[ext]',
      },
    },
  ],
};

export default imageRule;
