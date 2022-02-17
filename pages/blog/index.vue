<script setup lang="ts">
import { DevTo } from "@/interface"
import { store } from "@/store"

const { data, pending, error } = useLazyAsyncData("blog", () => $fetch<DevTo>("/api/devto"))
const latestPost = computed(() => data.value?.data[0])
const otherPost = computed(() => data.value?.data.slice(1))
const tagList = computed(() => {
  let tags: string[] = []
  data.value?.data.forEach((post) => tags.push(...post.tag_list))
  return [...new Set(tags)]
})

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})

watch(
  pending,
  () => {
    store.loading = pending.value
  },
  { immediate: true }
)
</script>

<template>
  <div class="w-full">
    <transition name="fade" mode="out-in">
      <h1 v-if="!data?.data && !error" class="font-bold text-5xl md:text-7xl text-center font-space">Blog</h1>
      <h1 v-else-if="error" class="font-bold text-5xl md:text-7xl text-center font-space">Error</h1>
      <div v-else>
        <h1 class="font-bold text-5xl md:text-7xl text-center font-space">Blog</h1>
        <div
          v-if="latestPost"
          class="mt-6 md:mt-12 mb-8 md:mb-20 rounded-4xl p-4 md:p-8 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"
        >
          <NuxtLink :to="`/blog/${latestPost.slug}`">
            <img
              class="rounded-2xl md:rounded-4xl aspect-video object-cover"
              :src="latestPost.cover_image"
              :alt="latestPost.title"
            />
            <div class="p-4 md:p-6">
              <p class="text-sm">{{ latestPost.readable_publish_date }}</p>
              <h3 class="font-bold text-2xl md:text-4xl font-space">{{ latestPost.title }}</h3>
              <p class="mt-4 md:text-xl">{{ latestPost.description }}</p>

              <ul class="mt-4 flex flex-wrap flex-row">
                <li class="tag mr-2" v-for="tag in latestPost.tag_list">#{{ tag }}</li>
              </ul>
            </div>
          </NuxtLink>
        </div>
        <ul class="md:grid grid-cols-2 gap-6">
          <li
            class="w-full mb-8 md:mb-12 rounded-4xl p-4 md:p-6 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"
            v-for="post in otherPost"
          >
            <NuxtLink :to="`/blog/${post.slug}`">
              <img
                class="w-full h-auto rounded-2xl md:rounded-3xl aspect-video object-cover"
                :src="post.cover_image"
                :alt="post.title"
              />
              <div class="p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <p class="text-sm">{{ post.readable_publish_date }}</p>
                  <h3 class="font-bold text-2xl font-space">{{ post.title }}</h3>
                  <p class="mt-2">{{ post.description }}</p>
                </div>
                <ul class="mt-4 flex flex-wrap flex-row">
                  <li class="tag mr-2" v-for="tag in post.tag_list">#{{ tag }}</li>
                </ul>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style lang="postcss">
.tag {
  @apply px-1 md:py-1 rounded-xl text-sm opacity-50;
}
</style>
