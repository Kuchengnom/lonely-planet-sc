import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kuchengnom.github.io',
  base: '/lonely-planet-sc',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});