<script setup lang="ts">
import { DevTo } from "@/interface"

const { data } = await useLazyAsyncData("blog", () => $fetch<DevTo>("/api/devto"))
</script>

<template>
  <div>
    <h1 class="font-bold text-7xl font-space">Blog</h1>
    <ul v-if="data?.data" class="mt-12">
      <li class="max-w-2xl mb-12 rounded-2xl overflow-hidden shadow-inset-white" v-for="post in data.data">
        <NuxtLink :to="`/blog/${post.slug}`">
          <img class="w-full h-auto" :src="post.cover_image" :alt="post.description" />
          <div class="p-6">
            <h3 class="font-bold text-2xl">{{ post.title }}</h3>
            <p class="mt-2">{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
