import chalk from 'chalk';
import { exec as execPro } from 'child-process-promise';
import { logWithPrefix, debugInfo } from './log';

function exec(command, options = {}) {
  const title = options.title || command;
  const stage = options.stage || '';

  logWithPrefix(`[${title}]`, chalk.cyan(`Start ${stage}......`));

  const output = debugInfo(title);

  return execPro(command, options)
    .progress((result) => {
      result.stdout.on('data', (data) => output('progress', data));
      result.stderr.on('data', (data) => output('error', data));
    })
    .then((result) => {
      logWithPrefix(`[${title}]`, chalk.green('Complete!'));
      return result;
    });
}

export default exec;
