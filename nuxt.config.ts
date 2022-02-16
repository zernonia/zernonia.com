import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles.css"],
  buildModules: ["nuxt-windicss", "unplugin-icons/nuxt"],
  privateRuntimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DEVTO_APIKEY: process.env.DEVTO_APIKEY,
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
})
