import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/all.min.css'],
  modules: ['@nuxt/content', '@pinia/nuxt'],
  nitro: {
    prerender: {
      routes: [
        '/knowledgebase/framework/attack', '/knowledgebase/framework/destroy', '/knowledgebase/framework/hostage', '/knowledgebase/framework/hvt', '/knowledgebase/framework/ied',
        '/knowledgebase/functions/ambient', '/knowledgebase/functions/briefing', '/knowledgebase/functions/medical', '/knowledgebase/functions/service'
      ]
    },
    preset: 'firebase'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
