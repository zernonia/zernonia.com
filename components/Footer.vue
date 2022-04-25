<script setup lang="ts">
import IconGithub from "~icons/feather/github"
import IconTwitter from "~icons/feather/twitter"
import IconDribbble from "~icons/feather/dribbble"
import IconDevTo from "~icons/feather/edit"
import { UmamiSession } from "@/interface"
import { numberFormatter } from "@/functions"
import { animate } from "motion"
import { Motion } from "motion/vue"

const data = ref<UmamiSession>({ count: 0 })
const counterRef = ref()

onMounted(async () => {
  const res = await $fetch<UmamiSession>("/api/umami")
  res ? (data.value = res) : ""
  animate(
    (progress) => (counterRef.value.innerHTML = numberFormatter(Math.round(progress * data.value.count)) + ` visitors`),
    {
      duration: 1.5,
      easing: "ease-out",
    }
  )
})
</script>

<template>
  <footer class="mt-6 md:mt-12 w-full flex flex-col md:flex-row justify-between">
    <div class="flex space-x-3 md:space-x-4 text-dark-900 dark:text-light-900">
      <a href="https://github.com/zernonia" aria-label="Github/zernonia" target="_blank"
        ><IconGithub class="w-5 md:w-6 h-auto fill-current"
      /></a>
      <a href="https://twitter.com/zernonia" aria-label="Twitter/zernonia" target="_blank"
        ><IconTwitter class="w-5 md:w-6 h-auto fill-current"
      /></a>
      <a href="https://dribbble.com/zernonia" aria-label="Dribbble/zernonia" target="_blank"
        ><IconDribbble class="w-5 md:w-6 h-auto fill-current"
      /></a>
      <a href="https://dev.to/zernonia" aria-label="Devto/zernonia" target="_blank"
        ><IconDevTo class="w-5 md:w-6 h-auto fill-current"
      /></a>

      <span class="md:!ml-8 text-sm md:text-base"> &copy; Zernonia 2022 </span>
    </div>

    <ClientOnly>
      <p ref="counterRef" class="text-gray-300"></p>
    </ClientOnly>
  </footer>
</template>
