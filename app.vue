<script setup lang="ts">
import IconGithub from "~icons/feather/github"
</script>

<template>
  <div class="min-w-screen min-h-screen p-8 flex flex-col justify-between">
    <div class="w-full flex justify-end">
      <nav class="flex space-x-6 items-center text-lg">
        <a href="/">Home</a>
        <a href="/project">Project</a>
        <a href="/blog">Blog</a>
        <a href="/fun">Fun</a>
      </nav>
    </div>

    <NuxtPage />
    <footer>
      <p>Zernonia</p>
      <div>
        <a href=""><IconGithub class="w-8 h-8" /></a>
      </div>
    </footer>
  </div>
</template>
