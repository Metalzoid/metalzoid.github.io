// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Gagnaire Development",
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
});
