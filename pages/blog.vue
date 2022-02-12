<script setup lang="ts">
import { DevTo } from "@/interface"

const response = await useFetch("/api/devto")
const data = computed(() => response.data.value as DevTo)
</script>

<template>
  <section>
    <h1 class="font-bold text-7xl font-space">Blog</h1>
    <ul class="mt-12">
      <li class="w-128 rounded-2xl overflow-hidden shadow-inset-white" v-for="post in data.data">
        <img class="w-full h-auto" :src="post.cover_image" :alt="post.description" />
        <div class="p-6">
          <h3 class="font-bold text-2xl">{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
