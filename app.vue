<script setup lang="ts">
import { store } from "@/store"
import { useDark, useToggle } from "@vueuse/core"
import IconLightMode from "~icons/feather/sun"
import IconDarkMode from "~icons/feather/moon"

const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const blob1Class = computed(() => {
  if (store.loading) return "left-1/3 top-1/3 !opacity-0"
  switch (route.name) {
    case "index":
      return "top-1/6 left-1/20"
    case "about":
      return "top-1/5 left-1/5"
    default:
      return "top-1/10 -left-1/10"
  }
})
const blob2Class = computed(() => {
  if (store.loading) return "left-1/3 top-1/3 "
  switch (route.name) {
    case "index":
      return "top-1/2 left-1/3"
    case "about":
      return "top-3/5 left-1/3"
    default:
      return "top-1/2 left-1/3"
  }
})
const blob3Class = computed(() => {
  if (store.loading) return "bottom-1/4 right-1/4 !opacity-0"
  switch (route.name) {
    case "index":
      return "bottom-1/5 right-1/20"
    case "about":
      return "bottom-2/5 -right-1/20"
    case "project":
      return "bottom-1/5 -right-1/5"
    default:
      return "bottom-1/20 -right-1/20"
  }
})
</script>

<template>
  <div
    class="-z-10 w-full min-h-screen flex justify-center bg-white dark:bg-dark-900 dark:text-light-900 transition duration-300"
  >
    <div class="max-w-screen-lg w-full relative p-8 flex flex-col items-center justify-between">
      <div class="z-10 w-full flex justify-end items-center mb-12">
        <nav class="flex space-x-6 items-center text-lg font-space">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/project">Project</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </nav>
        <button class="mt-2 ml-4 text-2xl" @click="toggleDark()">
          <transition name="fade" mode="out-in">
            <IconLightMode v-if="isDark"></IconLightMode>
            <IconDarkMode v-else></IconDarkMode>
          </transition>
        </button>
      </div>
      <NuxtPage class="z-10" />
      <Footer class="z-10" />

      <div class="z-0 fixed top-0 transform left-1/2 -translate-x-1/2 max-w-screen-lg w-full h-full">
        <Blob
          :class="blob1Class"
          class="bg-yellow-200 dark:bg-yellow-500 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        ></Blob>
        <Blob
          :class="blob2Class"
          class="bg-purple-200 dark:bg-purple-700 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-delay-1000"
        ></Blob>
        <Blob
          :class="blob3Class"
          class="bg-blue-300 dark:bg-blue-700 animate-blob animate-ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-delay-3000"
        ></Blob>
      </div>
    </div>
  </div>
</template>
