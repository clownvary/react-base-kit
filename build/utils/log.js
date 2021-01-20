import chalk from 'chalk';

export const logWithPrefix = (prefix, message) => {
  const newMsg = message
    .toString()
    .trim()
    .split('\n')
    .map((line) => `${chalk.gray(prefix)} ${line}`)
    .join('\n');
  console.log(newMsg);
};

export const debugInfo = (title) => (type, message) => logWithPrefix(`[${title}] ${type}:`, message);

export default logWithPrefix;
