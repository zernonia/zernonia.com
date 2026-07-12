<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: `${props.error.statusCode} — Zernonia`,
  robots: "noindex",
})
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-canvas px-6 text-center text-ink"
  >
    <div class="bg-blueprint absolute inset-0" aria-hidden="true" />

    <p class="eyebrow relative">
      <span class="text-brand" aria-hidden="true">+</span> Error
    </p>
    <h1
      class="relative mt-4 font-mono text-7xl font-medium tracking-tight sm:text-8xl"
    >
      {{ error.statusCode }}<span class="text-brand">.</span>
    </h1>
    <p class="relative mt-4 max-w-sm leading-relaxed text-mute">
      {{
        error.statusCode === 404
          ? "This page doesn't exist — it may have moved to the home page."
          : "Something went wrong."
      }}
    </p>
    <button
      class="relative mt-10 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-brand px-6 font-mono text-sm font-medium text-canvas transition-colors hover:bg-brand-bright"
      @click="clearError({ redirect: '/' })"
    >
      Back home
    </button>
  </div>
</template>
