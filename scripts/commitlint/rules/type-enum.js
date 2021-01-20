import includes from 'lodash/includes';

export const typeEnum = (parser, when, value) => {
  const { type } = parser;
  if (!includes(value, type)) {
    return [false, `Commit type must be one of [${value.toString()}]`];
  }
  return [true];
};
export default typeEnum;
