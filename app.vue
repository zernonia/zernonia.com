<script setup lang="ts">
import IconGithub from "~icons/feather/github"
</script>

<template>
  <div class="min-w-screen min-h-screen relative p-8 flex flex-col items-center justify-between">
    <div class="w-full flex justify-end">
      <nav class="flex space-x-6 items-center text-lg">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/project">Project</a>
        <a href="/blog">Blog</a>
        <a href="/fun">Fun</a>
      </nav>
    </div>

    <NuxtPage />
    <footer class="self-start">
      <p>Zernonia</p>
      <div>
        <a href=""><IconGithub class="w-8 h-8" /></a>
      </div>
    </footer>

    <Blob class="top-1/10 left-1/20 bg-yellow-200 animate-blob transition animate-delay-1000"></Blob>
    <Blob class="top-1/4 left-1/4 bg-purple-200 animate-blob transition animate-delay-1000"></Blob>
    <Blob class="bottom-1/10 right-1/20 bg-blue-300 animate-blob transition animate-delay-1000"></Blob>
  </div>
</template>
