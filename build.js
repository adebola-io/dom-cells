import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { glob } from 'glob';

async function updatePackageExports() {
  // Read package.json
  const pkg = JSON.parse(await fs.readFile('package.json', 'utf8'));

  // Get all JS files from lib folder
  const libFiles = glob.sync('lib/*.js');

  // Create exports map
  const exports = {};

  for (const file of libFiles) {
    const basename = path.basename(file, '.js');
    const relativePath = `./${basename}`;

    exports[relativePath] = {
      types: `./types/${basename}.d.ts`,
      default: `./lib/${basename}.js`,
    };
  }

  // Update package.json
  pkg.exports = exports;

  // Write updated package.json
  await fs.writeFile('package.json', JSON.stringify(pkg, null, 2));
}

async function build() {
  execSync('tsc -p jsconfig.json', { stdio: 'inherit' });
  await updatePackageExports();
  console.log('Build completed successfully');
}

build().catch(console.error);
