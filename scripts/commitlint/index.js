/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import path from 'path';

import { readFileSync } from 'fs';
import isFunction from 'lodash/isFunction';
import lintConfig from './config';
import { ROOT_PATH } from '../../build/utils/config';
import { debugInfo } from '../../build/utils/log';

const debug = debugInfo('COMMIT-LINT');

const exit = () => process.exit(1);

const getMsg = () => {
  const params = process.env.HUSKY_GIT_PARAMS;
  let commitMsg = '';
  if (params) {
    try {
      commitMsg = readFileSync(path.resolve(ROOT_PATH, params)).toString('utf-8').replace(/\n/g, '');
      debug('your input', commitMsg);
    } catch (error) {
      debug('✘ ', 'read git editing file error, please check your input');
      exit();
    }
  }
  return commitMsg;
};

/**
 *
 * @param {string} msg Git commit message
 * @returns {object} The extracted sections from commit message
 */
const extractSection = (msg) => {
  const result = {};
  const { parserPreset } = lintConfig;
  const { pattern, patternCorrespondence } = parserPreset;
  const matches = msg.match(pattern);
  if (matches) {
    patternCorrespondence.forEach((item, index) => {
      result[item] = matches[index + 1];
    });
  } else {
    debug('✘ ', "Your commit message doesn't follow our format <ticket> <type>: <subject>");
    exit();
  }
  return result;
};

/**
 * This is implementation of our validation rules
 * If you want to customize your own rules, you just need to write your implementation in this function
 * @param {object} sections The extracted sections from commit message
 */
const validateSection = (sections) => {
  const errors = [];
  const { rules } = lintConfig;
  Object.entries(rules).forEach(([key, config]) => {
    const [when, value] = config;
    const enable = when === 'always';
    if (enable) {
      const { default: ruleFunc } = require(`./rules/${key}`);
      if (isFunction(ruleFunc)) {
        const [ruleValid, ruleInfo] = ruleFunc(sections, when, value);
        !ruleValid && errors.push(ruleInfo);
      } else {
        debug('✘ ', `${key} is not a valid function`);
        exit();
      }
    }
  });

  if (errors.length > 0) {
    debug('✘ ', errors.join('\n'));
    exit();
  } else {
    debug('✔ ', 'Commit message is valid!');
  }
};

const msg = getMsg();
const sections = extractSection(msg);

if (sections) {
  validateSection(sections);
} else {
  debug('✘ ', 'Extract commit message failed, please check your input');
  exit();
}
