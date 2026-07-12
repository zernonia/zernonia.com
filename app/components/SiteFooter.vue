<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-line">
    <PlusMark class="absolute -top-[5px] -left-[5px] hidden lg:block" />
    <PlusMark class="absolute -top-[5px] -right-[5px] hidden lg:block" />

    <div
      class="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"
    >
      <p class="eyebrow">© {{ year }} Zernonia</p>

      <p class="eyebrow">
        Built with
        <a
          href="https://nuxt.com"
          target="_blank"
          rel="noopener"
          class="text-mute transition-colors hover:text-brand"
          >Nuxt</a
        >
        <span class="text-brand" aria-hidden="true"> + </span>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener"
          class="text-mute transition-colors hover:text-brand"
          >Tailwind CSS</a
        >
      </p>

      <ul class="flex items-center gap-5">
        <li v-for="social in socials" :key="social.label">
          <a
            :href="social.href"
            :target="social.href.startsWith('mailto:') ? undefined : '_blank'"
            rel="noopener"
            :aria-label="social.label"
            class="text-faint transition-colors hover:text-ink"
          >
            <Icon :name="social.icon" class="size-4" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
