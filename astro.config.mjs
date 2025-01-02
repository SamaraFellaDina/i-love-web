import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import markdown from '@astrojs/markdown-remark';

export default defineConfig({
  integrations: [svelte(), markdown()],
});
