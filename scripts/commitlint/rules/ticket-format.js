/* eslint-disable no-unused-vars */
export const ticketFormat = (parser, when, value) => {
  const { ticket } = parser;
  if (!/RBK?-\d+/.test(ticket)) {
    return [false, 'Jira ticket must format as RBK-xxx, like RBK-002'];
  }
  return [true];
};

export default ticketFormat;
