import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2026-07-01",

  modules: ["@nuxt/icon"],

  css: [
    "@fontsource-variable/inter",
    "@fontsource-variable/jetbrains-mono",
    "~/assets/css/main.css",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  icon: {
    // Bundle icons locally at build time — no runtime requests to the Iconify API
    provider: "none",
    clientBundle: {
      scan: true,
    },
    serverBundle: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0a0a0b" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  // Umami analytics — production builds only; click events are tagged via
  // data-umami-event attributes, which stay inert while this script is absent
  $production: {
    app: {
      head: {
        script: [
          {
            src: "https://umami-zeta-one.vercel.app/script.js",
            defer: true,
            "data-website-id": "b4e49202-4b8e-4068-93e3-1492727c3d53",
            "data-domains": "zernonia.com,www.zernonia.com",
          },
        ],
      },
    },
  },

  routeRules: {
    // Old site URLs — blog removed, pages merged into the single-page layout
    "/about": { redirect: { to: "/#about", statusCode: 301 } },
    "/project": { redirect: { to: "/#projects", statusCode: 301 } },
    "/blog": { redirect: { to: "/", statusCode: 301 } },
    "/blog/**": { redirect: { to: "/", statusCode: 301 } },
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  features: {
    inlineStyles: true,
  },
})
