import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  content: {

  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],
})
