/* eslint-disable no-unused-vars */
export const ticketUpperCase = (parser, when, value) => {
  const { ticket } = parser;
  if (/[a-z]/.test(ticket)) {
    return [false, 'Jira ticket must be uppercase letters, like ANT-002'];
  }
  return [true];
};

export default ticketUpperCase;
