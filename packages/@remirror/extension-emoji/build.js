// TODO setup emojibase https://milesj.gitbook.io/emojibase/data
// https://github.com/milesj/emojibase/blob/master/packages/core/src/types.ts
// https://github.com/milesj/emojibase/blob/master/packages/core/src/constants.ts
// https://raw.githubusercontent.com/milesj/emojibase/master/packages/data/en-gb/raw.json
// Multilanguage support and sub categories for splitting the build (allow
// multiple entry points)

const emojiLib = require('emojilib');
const data = require('emoji-mart/data/all.json');
const { join, resolve } = require('path');
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');
const { startCase, uniqueArray, omit, entries, capitalize } = require('../core-helpers/lib');

const dir = (...paths) => resolve(__dirname, join(...paths));
const formatFile = (path) => execSync(`prettier ${path} --write`, { stdio: 'inherit' });

const baseEmojis = emojiLib.lib;
const enhancedEmojis = data.emojis;

const DESCRIPTION = 'a';
const KEYWORDS = 'j';

const files = {
  emojis: dir('src', 'data', 'emojis.ts'),
  categories: dir('src', 'data', 'categories.ts'),
};

const TYPES = {
  emoji: `{keywords: string[]; char: string; category: string; name: string; description: string; skinVariations: boolean;}`,
  categories: `string`,
};

const createFileContents = (json, name, type) => {
  const typeName = `${capitalize(name)}Type`;
  const typeKeys = Object.keys(json)
    .map((key) => `'${key}'`)
    .join(' | ');
  const typeString = `Record<${typeKeys}, ${type}>;`;
  const jsonString = JSON.stringify(json, null, 2);

  return `/* AUTOGENERATED FILE - DO NOT EDIT */
export type ${typeName} = ${typeString}
const ${name}: ${typeName} = ${jsonString}

export default ${name};`;
};

const getStartCase = (category = '', name = '', firstKeyword = '') => {
  if (category === 'flags') {
    return `${name} flag`;
  }

  if (name.includes(firstKeyword)) {
    return name;
  }

  return `${name} ${firstKeyword}`;
};

const generateData = () => {
  const emojis = entries(baseEmojis)
    .map(([name, entry]) => {
      const other = enhancedEmojis[name] || enhancedEmojis[`flag-${name}`];
      const firstKeyword = entry.keywords[0];
      const category = entry.category;
      const description = other
        ? other[DESCRIPTION]
        : startCase(getStartCase(category, name, firstKeyword));
      const keywords = other
        ? uniqueArray([...entry.keywords, ...(other[KEYWORDS] || [])])
        : entry.keywords;

      const { fitzpatrick_scale: skinVariations } = entry;

      return {
        ...omit(entry, ['fitzpatrick_scale']),
        name,
        description,
        keywords,
        skinVariations,
      };
    })
    .reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {});

  const categories = Object.values(emojis)
    .map((entry) => ({
      id: entry.category,
      name: startCase(entry.category.replace('_and_', '_&_')),
    }))
    .reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});

  writeFileSync(files.emojis, createFileContents(emojis, 'emojis', TYPES['emoji']));
  writeFileSync(
    files.categories,
    createFileContents(categories, 'categories', TYPES['categories']),
  );

  Object.values(files).forEach((path) => formatFile(path));
};

generateData();
