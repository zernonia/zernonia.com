<script setup lang="ts">
const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"
    >
      <NuxtLink
        to="/"
        class="font-mono text-sm font-medium tracking-tight"
        aria-label="Zernonia — home"
      >
        zernonia<span class="animate-caret text-brand" aria-hidden="true"
          >_</span
        >
      </NuxtLink>

      <nav aria-label="Main" class="flex items-center gap-5 sm:gap-7">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="eyebrow hidden transition-colors hover:text-ink sm:block"
        >
          {{ link.label }}
        </a>

        <span class="hidden h-4 w-px bg-line-strong sm:block" aria-hidden="true" />

        <a
          :href="site.github"
          target="_blank"
          rel="noopener"
          class="text-mute transition-colors hover:text-ink"
          aria-label="Zernonia on GitHub"
        >
          <Icon name="simple-icons:github" class="size-4.5" />
        </a>
      </nav>
    </div>
  </header>
</template>
