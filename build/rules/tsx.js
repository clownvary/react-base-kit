import { INCLUDE_SRC } from '../utils/config';

export const tsxRule = {
  test: /\.(tsx|ts)?$/,
  include: INCLUDE_SRC,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        experimentalWatchApi: true,
      },
    },
  ],
};

export default tsxRule;
