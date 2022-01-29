<script setup lang="ts">
const state = ref<"" | "email" | "twitter" | "website" | "name">("")
</script>

<template>
  <main class="flex items-center justify-center min-w-screen min-h-screen">
    <div class="relative w-full h-full max-w-screen-xl min-h-screen-lg grid grid-cols-8 grid-rows-5 gap-4">
      <section class="card row-span-1 col-span-2"></section>
      <section class="card row-span-1 row-start-1 col-start-3 col-span-4">
        <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Zernonia
        </h1>
      </section>

      <section class="card p-4 col-span-2 col-start-7 row-span-2">
        <img class="object-cover w-full" src="https://ghchart.rshah.org/zernonia" alt="" />
      </section>
      <section class="card p-4 col-span-2 col-start-7 row-start-3 row-span-2">
        <IconTwitter></IconTwitter>
      </section>

      <section class="card !p-0 row-start-2 row-span-3 col-start-3 col-span-4">
        <img src="@/assets/avatar.png" alt="" />
      </section>

      <section class="card flex-col row-start-5 col-start-1 col-span-2">
        <IconBlog class="w-16 text-warm-gray-400"></IconBlog>
        <h2 class="text-2xl text-warm-gray-400 font-bold">Blog</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-3 col-span-2">
        <IconProject class="w-16 text-warm-gray-400"></IconProject>
        <h2 class="text-2xl text-warm-gray-400 font-bold">Project</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-5 col-span-2">
        <IconBox class="w-16 text-warm-gray-400"></IconBox>
        <h2 class="text-2xl text-warm-gray-400 font-bold">Archive</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-7 col-span-2">
        <IconBlog class="w-16 text-warm-gray-400"></IconBlog>
        <h2 class="text-2xl text-warm-gray-400 font-bold">Blog</h2>
      </section>
    </div>
  </main>
</template>

<style lang="postcss">
.card {
  @apply p-8 flex items-center justify-center rounded-4xl bg-light-400 text-dark-50 shadow-transparent shadow-xl transform hover:scale-102 hover:shadow-light-500 transition;
}
</style>
