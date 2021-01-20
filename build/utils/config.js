import path from 'path';

import pkg from '../../package.json';

export const ROOT_PATH = path.resolve();
export const INCLUDE_COMMON = [path.join(ROOT_PATH, 'src')];

export const styleConfig = {
  STYLE_OUTPUT_PATH: 'assets/styles/main.css',
  STYLE_SOURCE_MAP_PATH: './assets/styles/main.css.map',
  PKG_STYLE_LINK: `${pkg.name}_style_link`,
};
export const INCLUDE_SRC = [path.join(ROOT_PATH, 'src')];

export default { INCLUDE_COMMON, INCLUDE_SRC, ROOT_PATH, styleConfig };
