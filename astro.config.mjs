import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vrb.vercel.app',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
