import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/all.min.css'],
  head: {
    script: ['~/assets/js/all.min.js']
  },
  modules: ['@nuxt/content'],
  nitro: {
    preset: 'firebase'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
