const path = require('path');
const { dashName } = require('./utils');
const apis = require('./mockApis');
const { mockDataDir } = require('../mock/mock.config.json');
const DATA_TYPE ={
  DB:1,
  MAP:2
};

function genObj(apis, type=DATA_TYPE.DB) {
  let data = {};
  if (apis && apis instanceof Array) {
    apis.forEach(api => {
      switch (type) {
        case DATA_TYPE.DB:
          const key = dashName(api);
          const mockJson = require(`${path.resolve(__dirname, mockDataDir, api)}.json`);
          data[key] = mockJson;
          break;
        case DATA_TYPE.MAP:
          const matchUrl = `*${api}*`;
          const resourcePath = `/${dashName(api)}`;
          data[matchUrl] = resourcePath;
          break;
        default:
          break;
      }
    });
    console.log('data',data);
    return data;
  } else {
    console.warn('api type error, please check you api data.');
  }
}

const db = genObj(apis,DATA_TYPE.DB);
const mapping  = genObj(apis,DATA_TYPE.MAP)

module.exports = {
  db,
  mapping
}
