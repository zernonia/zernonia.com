<script setup lang="ts">
import IconGithub from "~icons/feather/github"
import IconTwitter from "~icons/feather/twitter"
import IconDribbble from "~icons/feather/dribbble"
import IconDevTo from "~icons/feather/edit"
</script>

<template>
  <footer class="mt-12 self-start">
    <div class="flex space-x-4 text-dark-900 dark:text-light-900">
      <a href="https://github.com/zernonia" target="_blank"><IconGithub class="w-6 h-auto fill-current" /></a>
      <a href="https://twitter.com/zernonia" target="_blank"><IconTwitter class="w-6 h-auto fill-current" /></a>
      <a href="https://dribbble.com/zernonia" target="_blank"><IconDribbble class="w-6 h-auto fill-current" /></a>
      <a href="https://dev.to/zernonia" target="_blank"><IconDevTo class="w-6 h-auto fill-current" /></a>

      <span class="!ml-8"> &copy; Zernonia 2022 </span>
    </div>
  </footer>
</template>
