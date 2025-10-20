// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // enables API routes
  output: 'server',

  // deploy target
  adapter: vercel(),

  // (you already have @astrojs/tailwind)
  // site: 'https://yourdomain.com' // optional, set later when you add a domain
  integrations: [],

  vite: {
    plugins: [tailwindcss()]
  }
});

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });