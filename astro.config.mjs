import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkExternalLinks from 'remark-external-links';

export default defineConfig({
  site: 'https://christlutheranmanhattan.org',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
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
    ]
  },
  vite: {
    build: {
      assetsInlineLimit: 0 // Ensures all assets are copied rather than inlined
    }
  }
});