<template>
  <footer
    class="h-70px fixed left-1/2 bottom-6 transform -translate-x-1/2 p-3 flex gap-x-3 items-center rounded-2xl border border-warm-gray-200"
  >
    <NuxtLink to="/" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconHome class="text-warm-gray-500"></IconHome>
    </NuxtLink>
    <NuxtLink to="/project" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconProject class="text-warm-gray-500"></IconProject>
    </NuxtLink>
    <NuxtLink to="/blog" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconBlog class="text-warm-gray-500"></IconBlog>
    </NuxtLink>

    <hr class="w-1px h-full bg-warm-gray-200" />

    <a href="https://twitter.com/zernonia" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconTwitter class="text-warm-gray-500"></IconTwitter>
    </a>
    <a href="https://github.com/zernonia" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconGithub class="text-warm-gray-500"></IconGithub>
    </a>

    <hr class="w-1px h-full bg-warm-gray-200" />

    <NuxtLink to="/archive" class="p-3 bg-opacity-50 bg-warm-gray-200 rounded-lg">
      <IconBox class="text-warm-gray-500"></IconBox>
    </NuxtLink>
  </footer>
</template>
