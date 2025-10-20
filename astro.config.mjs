// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',         // enables API routes
  adapter: vercel(),        // deploy target
  integrations: [],         // (you already have @astrojs/tailwind)
  // site: 'https://yourdomain.com' // optional, set later when you add a domain
});

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });