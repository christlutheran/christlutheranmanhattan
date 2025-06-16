import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkExternalLinks from 'remark-external-links';
import react from '@astrojs/react';
import rehypeRaw from 'rehype-raw';

export default defineConfig({
  site: 'https://www.christlutheranmanhattan.org',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    react()
  ],
  build: {
    assets: '_astro'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  markdown: {
    remarkPlugins: [
      [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
    rehypePlugins: [rehypeRaw]
  },
  vite: {
    build: {
      assetsInlineLimit: 0 // Ensures all assets are copied rather than inlined
    }
  }
});