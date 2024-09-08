/// <reference types="node" />

import fs from 'node:fs';
import { execSync } from 'node:child_process';

execSync('rm -f *.d.ts && npx tsc --project jsconfig.json', {
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
    types: `./${filename}.d.ts`,
  };
}

Reflect.set(packageJson, 'exports', exportFiles);

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
