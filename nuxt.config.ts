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
    documentDriven: {
      layoutFallbacks: ['theme'],
      globals: {
        theme: {
          where: [
            {
              _id: 'content:_theme.yml',
            },
          ],
          without: ['_'],
        },
      },
      injectPage: true,
      navigation: true,
      page: true,
      surround: true,
    },
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
