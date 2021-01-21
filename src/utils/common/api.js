/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { get } from 'lodash';

const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete', 'head'];

class API {
  constructor() {
    HTTP_METHODS.forEach((method) => {
      this[method] = this._asyncRequest(method);
    });
    this.requestCount = 0;
  }

  _plusRequest = () => {
    this.requestCount = this.requestCount + 1;
  };

  _minusRequest = () => {
    this.requestCount = this.requestCount - 1;
  };

  _beforeRequest = () => {
    this._plusRequest();
    if (this.requestCount > 0) {
      console.log('-----loading open------');
    }
  };

  _afterRequest = () => {
    this._minusRequest();
    if (this.requestCount === 0) {
      console.log('-----loading close------');
    }
  };

  /**
   *
   * @param {Object} requestMethod refer https://github.com/axios/axios#request-config
   */
  _asyncRequest = (requestMethod) => async (requestConfig) => {
    try {
      const config = { ...requestConfig, method: requestMethod };
      this._beforeRequest();
      const response = await axios(config);
      return Promise.resolve(get(response, 'data', {}));
    } catch (error) {
      return error;
    } finally {
      this._afterRequest();
    }
  };

  static getInstance() {
    if (!API.instance) {
      API.instance = new API();
    }
    return API.instance;
  }
}

export default API.getInstance();
