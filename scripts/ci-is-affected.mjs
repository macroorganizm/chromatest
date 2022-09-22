import { execSync } from 'child_process';
import yargs from 'yargs';
import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(function () {
  let { appName, base, head, target, field } = yargs(process.argv).argv;
  base = base || 'origin/master';
  head = head || 'HEAD';
  field = field || 'tasks';

  // if (!appName && !target) {
  //   console.log('One of the "appName" or "target" param should be passed');
  //   process.exit(1);
  // }

  const command = getCommand({ base, head, target });

  // string needed
  let isAffected = 'false';
  const stringOutput = execSync(command).toString();

  console.log('affected projects: ', stringOutput.split(','));

  const packageLockPath = path.join(__dirname, '../angular.json');
  const fd = fs.readFileSync(packageLockPath).toString();

  console.log('ci-is-affected.mjs => : ', JSON.parse(fd).projects);





  // if (appName) {
  //   isAffected = parseListOutput(stringOutput, { appName });
  // } else if (target) {
  //   isAffected = parseObjectOutput(stringOutput, { field });
  // }
  //
  // console.log(isAffected);
})();

/**
 * @params {
 *  base - name of base branch to compare with(master by default)
 *  head - name of derivative branch to compare with the base
 *  target - target name in project.json files to make a fetch of affected
 * }
 */
function getCommand(params) {
  return 'npx nx print-affected --target=storybook-mark --select=tasks.target.project'
  // if (params.target) {
  //   return `npx nx print-affected --target=${params.target} --base=${params.base} --head=${params.head}`;
  // }
  // return `npx nx print-affected --type=app --select=projects --base=${params.base} --head=${params.head}`;
}

function parseListOutput(output, params) {
  return output
    .split(',')
    .map((p) => p.trim())
    .includes(params.appName)
    .toString();
}

function parseObjectOutput(output, params) {
  try {
    const asObject = JSON.parse(output);
    if (
      asObject[params.field] &&
      asObject[params.field].length &&
      asObject[params.field].length > 0
    ) {
      return 'true';
    }
  } catch (e) {
    // parsing error
  }
  return 'false';
}
