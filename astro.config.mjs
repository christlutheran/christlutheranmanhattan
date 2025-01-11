import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

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
  }
});