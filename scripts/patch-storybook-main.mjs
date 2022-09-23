import { execSync } from 'child_process';
import yargs from 'yargs';
import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(function () {
  let { base, head } = yargs(process.argv).argv;
  base = base || 'origin/main';
  head = head || 'HEAD';
  const stringOutput = execSync(`npx nx print-affected --base=${base} --head=${head} --target=storybook-mark --select=tasks.target.project`).toString();

  const affectedLibsNames = stringOutput.split(',').map((p) => p.trim());
  const fd = fs.readFileSync(path.join(__dirname, '../angular.json')).toString();

  const projectsPaths = JSON.parse(fd).projects;

  const storiesToInclude = [];

  for (const affectedStory of affectedLibsNames) {
    const storyLibPath = projectsPaths[affectedStory];

    if (storyLibPath) {
      storiesToInclude.push(`'../../../${storyLibPath}/**/*.stories.ts'`)
    }
  }

  const mainTsPath = path.join(__dirname, '../libs/ui/.storybook/main.js');

  const mainTs = fs.readFileSync(mainTsPath);

  const patchedFile = mainTs.toString().replace("stories: ['../../../**/*.stories.ts']", `stories: [${storiesToInclude.join(', ')}]`);

  console.log(patchedFile);

  fs.writeFileSync(mainTsPath, patchedFile);
})();
