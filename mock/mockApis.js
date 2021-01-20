const { mockDataDir } = require('./mock.config.json');
const { walk } = require('./utils');

const apis = walk(mockDataDir);

module.exports = apis;



