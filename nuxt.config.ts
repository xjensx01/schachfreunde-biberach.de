export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  nitro: {
    prerender: {
      routes: ['/blog/*', '/teams', '/turniere', '/verein'],
    },
  },
  unocss: {
    preflight: true,
  },
})
