export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  nitro: {
    routeRules: {
      '/_articles': { redirect: '/' },
    },
    prerender: {
      routes: ['/blog/*', '/teams', '/turniere', '/verein'],
    },
  },
  unocss: {
    preflight: true,
  },
  sourcemap: {
    server: true,
    client: false,
  },
})
