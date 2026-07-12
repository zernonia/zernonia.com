<script setup lang="ts">
defineProps<{
  index: string
  label: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-2xl">
    <p class="eyebrow">
      <span class="text-brand">{{ index }}</span>
      <span aria-hidden="true"> — </span>{{ label }}
    </p>
    <h2
      class="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 leading-relaxed text-mute">
      {{ description }}
    </p>
  </div>
</template>
