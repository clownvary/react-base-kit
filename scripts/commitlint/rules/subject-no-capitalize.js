/* eslint-disable no-unused-vars */
export const subjectNoCapitalize = (parser, when, value) => {
  const { subject } = parser;
  if (/^[A-Z]/.test(subject)) {
    return [false, 'Subject first letter no need to be capitalized'];
  }
  return [true];
};

export default subjectNoCapitalize;
