import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import simpleStackQuery from 'simple-stack-query';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [
    partytown(),
    tailwind(),
    icon(),
    sitemap(),
    mdx(),
    simpleStackQuery()
  ]
});