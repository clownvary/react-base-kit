import path from 'path';
import fs from 'fs';
import cpx from 'cpx';

import { ROOT_PATH } from './config';

/**
 * Just using in dev mode.
 * Copy package.json file to corresponding project's folder, shell will get app entrance from package.json.
 */

const copyPkg = () => {
  const destDir = path.resolve();
  const pkgPath = path.resolve(ROOT_PATH, 'package.json');
  console.log(`=== Start copy package.json to ${destDir} ......`);
  if (fs.existsSync(destDir)) {
    cpx.copySync(pkgPath, destDir);
    console.log('=== Copy package.json done');
  } else {
    console.log('=== Statr make dir......');
    fs.mkdir(destDir, { recurve: true }, (e) => {
      if (e) throw e;
      console.log('=== Make dir done......');
      copyPkg();
    });
  }
};

export default copyPkg;
