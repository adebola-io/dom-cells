/// <reference types="node" />

import fs from 'node:fs';
import { execSync } from 'node:child_process';

execSync('rm -rf types && npx tsc --project jsconfig.json', {
  stdio: 'inherit',
});
const excluded = ['build.js'];

const files = fs.readdirSync(process.cwd());
const jsFiles = files.filter(
  (file) => file.endsWith('.js') && !excluded.includes(file)
);

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const exportFiles = {};

for (const file of jsFiles) {
  const filename = file.split('.').slice(0, -1).join('.');
  exportFiles[`./${filename}`] = {
    import: `./${filename}.js`,
    types: `./types/${filename}.d.ts`,
  };
}

Reflect.set(packageJson, 'exports', exportFiles);

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
