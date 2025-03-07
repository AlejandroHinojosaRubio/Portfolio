import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-portfolio-domain.com',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

