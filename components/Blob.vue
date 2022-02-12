<script setup lang="ts"></script>

<template>
  <div class="blur-blob animate-blob transition"></div>
</template>

<style lang="postcss">
.blur-blob {
  @apply absolute -z-10 w-76 h-76 rounded-full opacity-60 mix-blend-hard-light filter blur-3xl;
}
</style>
