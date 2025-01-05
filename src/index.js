export { default as Footer } from './components/Footer.svelte'
export { default as Header } from './components/Header.svelte'

export { default as Details} from './components/Subject/Details.svelte'
export { default as Github_Hyperlinks} from './components/Subject/Github_Hyperlinks.svelte'
export { default as Intro} from './components/Subject/Intro.svelte'
export { default as Keywords} from './components/Subject/Keywords.svelte'

export { default as Heading } from './components/Heading.svelte'
export { default as Subjects } from './components/Subjects.svelte'
export { default as Icons } from './components/libraries/Icons.svelte'
export { default as Navigation } from './components/Navigation.svelte'

export { default as Layout } from './layouts/Layout.astro'
export { default as Archive } from './assets/data/Data.json'

// index.js

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export function ReadMarkdown(filePath) {
  const absolutePath = path.resolve(filePath);
  const content = fs.readFileSync(absolutePath, 'utf-8');

  const htmlContent = marked(content);
  return htmlContent;
}




