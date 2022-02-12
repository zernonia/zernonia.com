import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles.css"],
  buildModules: ["nuxt-windicss", "unplugin-icons/nuxt"],
  privateRuntimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DEVTO_APIKEY: process.env.DEVTO_APIKEY,
  },
})
