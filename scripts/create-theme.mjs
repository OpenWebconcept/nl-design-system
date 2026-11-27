/**
 * Creates an empty municipality theme in `proprietary/` and registers it in Storybook.
 *
 * Usage: `pnpm run create-theme <slug> "<Name>"`, for example `pnpm run create-theme voorbeeldstad "Voorbeeldstad"`.
 */
import console from 'node:console';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..');
const [slug, name] = process.argv.slice(2);

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '') || !name) {
  console.error(
    'Usage: pnpm run create-theme <slug> "<Name>", for example: pnpm run create-theme voorbeeldstad "Voorbeeldstad"',
  );
  console.error('Write the slug in kebab case, without diacritics.');
  process.exit(1);
}

const theme = `theme-${slug}`;
const packageName = `@openwebconcept/${theme}`;
const themeDir = `proprietary/${theme}`;

if (existsSync(path.join(root, themeDir))) {
  console.error(`${themeDir} already exists.`);
  process.exit(1);
}

const read = (file) => readFile(path.join(root, file), 'utf8');
const toJson = (value) => `${JSON.stringify(value, null, 2)}\n`;
const sortKey = (line) => line.replaceAll("'", '').trim();

/**
 * Adds a line to the first block of lines that match the pattern, in alphabetical order and with the indentation of the block.
 * @param {string} text The file content.
 * @param {RegExp} pattern Matches every line of the block.
 * @param {string} line The line to add.
 * @returns {string} The file content with the line added.
 */
const insertLine = (text, pattern, line) => {
  const lines = text.split('\n');
  const start = lines.findIndex((current) => pattern.test(current));
  if (start === -1) {
    throw new Error(`Could not find ${pattern} to register the theme, so add it by hand.`);
  }
  let end = start;
  while (end < lines.length && pattern.test(lines[end])) {
    end += 1;
  }
  const indent = lines[start].match(/^\s*/)[0];
  const block = [...lines.slice(start, end), indent + line].sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : 1));
  lines.splice(start, end - start, ...block);
  return lines.join('\n');
};

// The OWC theme is the template, so updates to its scripts and dependencies carry over to new themes.
const owcPackage = JSON.parse(await read('proprietary/theme-owc/package.json'));
const owcConfig = await read('proprietary/theme-owc/style-dictionary.config.json');
const config = owcConfig.replace('".theme-owc"', `".${theme}"`);

if (config === owcConfig) {
  throw new Error('Could not find the `.theme-owc` selector in the style-dictionary config of theme-owc.');
}

/* eslint-disable perfectionist/sort-objects -- package.json uses the conventional field order. */
const themePackage = {
  name: packageName,
  version: '0.0.0',
  author: owcPackage.author,
  description: `Design tokens for ${name} theme`,
  license: owcPackage.license,
  keywords: ['nl-design-system', 'design-tokens', slug],
  private: true,
  publishConfig: owcPackage.publishConfig,
  repository: { ...owcPackage.repository, directory: themeDir },
  scripts: owcPackage.scripts,
  devDependencies: { '@openwebconcept/design-tokens': 'workspace:*', ...owcPackage.devDependencies },
};
/* eslint-enable perfectionist/sort-objects */

const readme = `# ${name} Theme

Design tokens for the ${name} municipality theme.

## Status: empty theme

This theme has no tokens of its own yet. It shows the defaults from \`@openwebconcept/design-tokens\`, scoped to the \`.${theme}\` selector, until the ${name} design tokens are added.

## Installation

\`\`\`bash
pnpm add ${packageName}
\`\`\`

## Usage

### CSS

\`\`\`css
@import '${packageName}/dist/index.css';
\`\`\`

### SCSS

\`\`\`scss
@import '${packageName}/dist/variables';
\`\`\`

### JavaScript

\`\`\`js
import tokens from '${packageName}';
\`\`\`

## Building

\`\`\`bash
pnpm run build
\`\`\`

## Development

\`\`\`bash
pnpm run watch
\`\`\`
`;

const license = `# License

Copyright (c) ${new Date().getFullYear()} Community for NL Design System

All rights reserved.

This design system theme is proprietary to the municipality of ${name}.
`;

const changeset = `---
'${packageName}': major
---

Added an empty theme for ${name}. It shows the defaults from \`@openwebconcept/design-tokens\` until the ${name} design tokens are added.
`;

// Register the theme in Storybook before writing anything, so a failure leaves no half-made theme behind.
const isMunicipalityTheme = (key) => key.startsWith('@openwebconcept/theme-') && key !== '@openwebconcept/theme-owc';
const storybookPackage = JSON.parse(await read('packages/storybook/package.json'));
const dependencies = Object.entries(storybookPackage.devDependencies);
const themesStart = dependencies.findIndex(([key]) => isMunicipalityTheme(key));

if (themesStart === -1) {
  throw new Error(
    'Could not find the themes in the devDependencies of packages/storybook/package.json, so add it by hand.',
  );
}

const otherDependencies = dependencies.filter(([key]) => !isMunicipalityTheme(key));
const themeDependencies = [...dependencies.filter(([key]) => isMunicipalityTheme(key)), [packageName, 'workspace:*']];
themeDependencies.sort(([a], [b]) => (a < b ? -1 : 1));
otherDependencies.splice(themesStart, 0, ...themeDependencies);
storybookPackage.devDependencies = Object.fromEntries(otherDependencies);

const themeKey = /^[a-z][a-z0-9]*$/.test(slug) ? slug : `'${slug}'`;
let preview = await read('packages/storybook/config/preview.ts');
preview = insertLine(
  preview,
  /^import '@openwebconcept\/theme-(?!owc\/)[a-z0-9-]+\/dist\/index\.css';$/,
  `import '${packageName}/dist/index.css';`,
);
preview = insertLine(preview, /^\s+'?[a-z0-9-]+'?: 'theme-[a-z0-9-]+',$/, `${themeKey}: '${theme}',`);

const files = [
  [`.changeset/${theme}.md`, changeset],
  ['packages/storybook/config/preview.ts', preview],
  ['packages/storybook/package.json', toJson(storybookPackage)],
  [`${themeDir}/LICENSE.md`, license],
  [`${themeDir}/package.json`, toJson(themePackage)],
  [`${themeDir}/README.md`, readme],
  [`${themeDir}/src/index.scss`, `/* ${name} Theme */\n@import "./theme.css";\n`],
  [`${themeDir}/style-dictionary.config.json`, config],
];

for (const [file, content] of files) {
  await mkdir(path.dirname(path.join(root, file)), { recursive: true });
  await writeFile(path.join(root, file), content);
}

console.log(`Created ${themeDir} and .changeset/${theme}.md, and added the theme to Storybook.`);
console.log('Next: run `pnpm install`, then add the tokens as described in proprietary/README.md.');
