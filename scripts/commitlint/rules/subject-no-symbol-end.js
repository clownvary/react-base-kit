/* eslint-disable no-unused-vars */
export const subjectNoSymbolEnd = (parser, when, value) => {
  const { subject } = parser;
  if (/(\.|!)(\s?)+$/.test(subject)) {
    return [false, 'Subject no dot or other symbols at end'];
  }
  return [true];
};

export default subjectNoSymbolEnd;
