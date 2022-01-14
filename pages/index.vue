<script setup lang="ts">
const state = ref<"" | "email" | "twitter" | "website" | "name">("")
</script>

<template>
  <main class="relative bg-light-500 min-w-screen min-h-screen flex items-center justify-center">
    <div class="absolute top-20 left-20">
      {{ state }}
    </div>
    <h1 class="font-space">
      <span @mouseenter="state = 'name'">zernonia</span>
      <span @mouseenter="state = 'twitter'"> @ zernonia</span>
      <span @mouseenter="state = 'website'"> . com </span>
    </h1>
  </main>
</template>
