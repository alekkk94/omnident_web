// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://omnident.mk',

  i18n: {
    defaultLocale: 'mk',
    locales: ['mk', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
  adapter: cloudflare(),
});