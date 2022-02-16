import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
      console.log("Go to hash", to.hash)

      return {
        el: to.hash,
        top: 30,
        behavior: "smooth",
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 200)
      })
    }
  }
})
