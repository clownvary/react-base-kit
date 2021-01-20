import semver from 'semver';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { question } from 'readline-sync';
import { resolve as resolvePath } from 'path';
import exec from '../utils/exec';
import { ROOT_PATH } from '../utils/config';

if (process.cwd() !== resolvePath(ROOT_PATH)) {
  console.error('The release script must be run from the repo root');
  process.exit(1);
}

const getPackageVersion = () => JSON.parse(readFileSync(resolvePath(ROOT_PATH, 'package.json'))).version;

// Get the next version, which may be specified as a semver
// version number or anything `npm version` recognizes. This
// is a "pre-release" if nextVersion is premajor, preminor,
// prepatch, or prerelease

const type = 'patch';
const curVersion = getPackageVersion();
let nextVersion = semver.inc(curVersion, type);
const msg = chalk.cyan(
  `Current version is (${curVersion}).\nPress ENTER to use (${nextVersion}) or type your own for next version:`,
);
nextVersion = question(msg) || nextVersion;

const nextVerRef = nextVersion;
nextVersion = semver.clean(nextVersion);
if (!nextVersion || !semver.valid(nextVersion)) {
  console.log(chalk.red(`ERROR: Invalid next version (${nextVerRef})!`));
  process.exit(0);
}

if (semver.lte(nextVersion, curVersion)) {
  console.log(chalk.red(`ERROR: Use a value larger than current version (${curVersion})!`));
  process.exit(0);
}

exec('npm run build', { stage: 'building' })
  .then(() => exec('git add dist/', { stage: 'adding to repo' }))
  .then(() => exec('git commit --allow-empty -m "npm run build"', { stage: 'committing' }))
  .then(() =>
    exec(`npm version ${nextVersion} --force -m "bump version to ${nextVersion}"`, { stage: 'bumping version' }),
  )
  //  Push to the same branch on the git remote (github).
  //  Do this before we publish in case anyone has pushed since we last pulled
  .then(() => exec('git push origin dev:dev', { stage: 'pushing to remote' }))
  //  Publish to nexus or npm. Use the "next" tag for pre-releases,
  //  "latest" for all others
  //   Push the v* tag to github
  .then(() => exec(`git push -f --no-verify origin v${getPackageVersion()}`, { stage: 'pushing tag' }))
  .catch((error) => console.log(chalk.red(error)));
