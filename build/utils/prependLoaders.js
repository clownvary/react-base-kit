import castArray from 'lodash/castArray';

export const prependLoaders = (rule, preLoaders) => {
  const { use } = rule;
  const newRule = rule;
  const loaders = castArray(use);
  if (preLoaders && preLoaders.length > 0) {
    preLoaders.forEach((loader) => {
      loaders.unshift({ loader });
    });
  }
  newRule.use = loaders;
  return newRule;
};
export default prependLoaders;
