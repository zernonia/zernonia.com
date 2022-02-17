<script setup lang="ts"></script>

<template>
  <div class="blur-blob animate-blob transition"></div>
</template>

<style lang="postcss">
.blur-blob {
  transition-property: top, left, bottom, right, opacity, background;
  transition-duration: 2000ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply absolute -z-10 w-48 md:w-76 h-48 md:h-76 rounded-full opacity-60 dark:opacity-30  mix-blend-hard-light filter blur-3xl;
}
</style>
