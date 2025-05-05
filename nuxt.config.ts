// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
  },
  css: ['~/assets/css/Template.css', '~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

})
