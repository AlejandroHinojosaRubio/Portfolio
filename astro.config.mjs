import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  site: 'https://alejandrohinojosa.dev',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true
  }),
});

