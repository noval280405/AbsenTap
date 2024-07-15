// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", '@pinia/nuxt', "nuxt-vuefire"],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  ssr: false,
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
      // there could be other properties depending on the project
    },
  },

  compatibilityDate: "2024-07-09",
})