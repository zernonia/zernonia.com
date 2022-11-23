<script setup lang="ts">
import { store } from "@/store"
import { useDark, useToggle } from "@vueuse/core"

const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const navBlobClass = computed(() => {
  switch (route.name) {
    case "index":
      return "bg-yellow-200 dark:bg-yellow-500 left-2"
    case "about":
      return "bg-purple-200 dark:bg-purple-500  left-18  md:left-22"
    case "project":
      return "bg-blue-200 dark:bg-blue-500  left-34  md:left-42"
    case "blog":
    case "blog-slug":
      return "bg-red-300 dark:bg-red-500  left-50  md:left-62"
  }
})

const blob1Class = computed(() => {
  if (store.loading) return "left-1/4 md:left-1/3 top-1/3 md:top-1/3"
  switch (route.name) {
    case "index":
      return "top-1/6 left-1/20"
    case "about":
      return "top-1/10 left-0"
    default:
      return "top-1/10 -left-1/10"
  }
})
const blob2Class = computed(() => {
  if (store.loading) return "left-1/3 top-1/3  !opacity-0"
  switch (route.name) {
    case "index":
      return "top-1/2 left-1/3"
    case "about":
      return "top-2/5 left-1/3"
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
      return "bottom-1/20 -right-1/20 dark:bottom-2/5 dark:-right-1/20"
    case "project":
      return "bottom-1/5 -right-1/5"
    default:
      return "bottom-1/20 -right-1/20"
  }
})

const { setMeta } = useCustomMeta()
setMeta("Welcome to Zernonia 🤩")
</script>

<template>
  <Html lang="en-US">
    <div
      class="-z-10 w-full min-h-screen flex justify-center bg-white dark:bg-dark-900 text-dark-200 dark:text-light-900 transition duration-300"
    >
      <div
        class="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between"
      >
        <div class="z-10 w-full flex justify-end items-center mb-6 md:mb-12">
          <nav
            class="relative flex space-x-4 md:space-x-6 items-center text-base md:text-lg font-space"
          >
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/project">Project</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>

            <Blob
              :class="navBlobClass"
              class="top-0 !ml-0 !w-8 !h-8 !blur-md !animate-none"
            ></Blob>
          </nav>
          <button
            class="mt-2 ml-4 text-lg md:text-2xl"
            aria-label="Toggle Dark mode"
            @click="toggleDark()"
          >
            <transition name="fade" mode="out-in">
              <div class="i-feather-sun" v-if="isDark"></div>
              <div class="i-feather-moon" v-else></div>
            </transition>
          </button>
        </div>

        <NuxtPage class="z-10" />
        <Footer class="z-10" />

        <div
          class="z-0 fixed top-0 transform left-1/2 -translate-x-1/2 max-w-screen-lg w-full h-full"
        >
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
  </Html>
</template>
