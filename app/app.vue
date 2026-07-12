<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ?? site.title,
})
</script>

<template>
  <div class="min-h-screen bg-canvas text-ink">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-brand focus:text-canvas focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
    >
      Skip to content
    </a>

    <SiteHeader />

    <div class="relative mx-auto w-full max-w-6xl lg:border-x lg:border-line">
      <main id="main">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
