const { appendQueryToEnd } = require('../utils');
module.exports = (req, res, next) => {
    const {method, body :{ resourceName }} = req;
    if (method === 'POST' && resourceName) {
      req.url = appendQueryToEnd(req.url, {
        resourceName
      });
    }
    next()
  }
