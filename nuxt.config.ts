// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/styles/style_small.css",
    "~/styles/style.css",
  ],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Gagnaire Development",
    },
  },
});
