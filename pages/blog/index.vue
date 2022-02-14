<script setup lang="ts">
import { DevTo } from "@/interface"

const { data } = useLazyAsyncData("blog", () => $fetch<DevTo>("/api/devto"))
const latestPost = computed(() => data.value?.data[0])
const otherPost = computed(() => data.value?.data.slice(1))
const tagList = computed(() => {
  let tags: string[] = []
  data.value?.data.forEach((post) => tags.push(...post.tag_list))
  return [...new Set(tags)]
})
</script>

<template>
  <div class="w-full">
    <h1 class="font-bold text-7xl text-center font-space">Blog</h1>
    <div v-if="!data?.data">Loading...</div>
    <div class="mt-12" v-else>
      <div v-if="latestPost" class="mb-20 rounded-4xl p-8 shadow-inset-white">
        <NuxtLink :to="`/blog/${latestPost.slug}`">
          <img class="rounded-4xl" :src="latestPost.cover_image" :alt="latestPost.title" />
          <div class="p-6">
            <p>{{ latestPost.readable_publish_date }}</p>
            <h3 class="font-bold text-4xl font-space">{{ latestPost.title }}</h3>
            <p class="mt-4 text-xl">{{ latestPost.description }}</p>

            <ul class="mt-4 flex flex-row space-x-2">
              <li class="tag" v-for="tag in latestPost.tag_list">#{{ tag }}</li>
            </ul>
          </div>
        </NuxtLink>
      </div>
      <ul class="grid grid-cols-2 gap-6">
        <li class="w-full mb-12 rounded-2xl p-6 shadow-inset-white" v-for="post in otherPost">
          <NuxtLink :to="`/blog/${post.slug}`">
            <img class="w-full h-auto rounded-2xl" :src="post.cover_image" :alt="post.title" />
            <div class="p-6 flex flex-col justify-between">
              <div>
                <p>{{ post.readable_publish_date }}</p>
                <h3 class="font-bold text-2xl font-space">{{ post.title }}</h3>
                <p class="mt-2">{{ post.description }}</p>
              </div>
              <ul class="mt-4 flex flex-row space-x-2">
                <li class="tag" v-for="tag in post.tag_list">#{{ tag }}</li>
              </ul>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss">
.tag {
  @apply px-1 py-1 rounded-xl text-sm opacity-25;
}
</style>
