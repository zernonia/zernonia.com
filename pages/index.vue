<script setup lang="ts">
const { setMeta } = useCustomMeta()
setMeta("Welcome to Zernonia 🤩")
</script>

<template>
  <div
    class="p-16 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl shadow-inset-white dark:shadow-none"
  >
    <p
      class="inline-flex items-center text-center text-lg md:text-2xl text-gray-500 dark:text-gray-300 tracking-wide"
    >
      Hi
      <span class="wave text-5xl mx-3 max-2">👋🏻</span>
      I am
    </p>
    <h1 class="text-6xl md:text-8xl font-bold my-4 tracking-tight font-space">
      Zernonia
    </h1>
    <p
      class="mt-6 text-lg md:text-xl text-center text-gray-500 dark:text-gray-300 tracking-wide"
    >
      Frontend Developer | IndieHacker wannabe
    </p>

    <NuxtLink to="/about" class="button-next group mt-12 md:mt-24">
      About
      <div
        class="i-feather-arrow-right w-6 h-6 duration transition-all ml-2 group-hover:ml-3"
      />
    </NuxtLink>
  </div>
</template>
