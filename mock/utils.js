const fs = require('fs');
const path = require('path');
const { mockDataDir } = require('../mock/mock.config.json');

module.exports = {
  dashName: function (name) {
    let destName = name;
    const matchChars = ['-', '/'];
    matchChars.forEach(char => {
      if (destName && destName.indexOf(char) !== -1) {
        destName = destName.split(char).join('_');
      };
    })
    return destName;
  },
  appendQuery: function (url, queries) {
    let [path, curQueries] = url.split('?');
    for (let [key, value] of Object.entries(queries)) {
      curQueries = curQueries + `&${key}=${value}`;
    }

    return path + '?' + curQueries.replace('undefined&',"");
  },
  appendQueryToEnd: function (url, query) {
    return module.exports.appendQuery(url, query);
  },
  walk:function(dir) {
    let results = [];
    const dataDir = path.resolve(__dirname, mockDataDir);
    const apiDirPath = path.resolve(__dirname, dir);
    let apiPrefixs = fs.readdirSync(apiDirPath);
    apiPrefixs.forEach(function(api) {
        const apiPath = path.resolve(apiDirPath,api);
        const stat = fs.statSync(apiPath);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(module.exports.walk(apiPath));
        } else {
            /* Is a file */
          const relApiPath = path.relative(dataDir, apiPath).split('.')[0];
          results.push(relApiPath.split(path.sep).join('/'));
        }
    });
    return results;
  }
}
