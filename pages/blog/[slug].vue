<script setup lang="ts">
import { DevToPost } from "@/interface"
import { store } from "@/store"
const route = useRoute()

const { data, pending } = await useLazyAsyncData(`blog-${route.params.slug}`, () =>
  $fetch<DevToPost>(`/api/devto/${route.params.slug}`)
)

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
  <section>
    <div v-if="!data?.data">Loading...</div>
    <div v-else>
      <img class="mt-12 rounded-4xl" :src="data.data.cover_image" :alt="data.data.title" />
      <h2 class="mt-12 text-6xl font-bold font-space">{{ data.data.title }}</h2>
      <div class="mt-4 flex items-center">
        <img class="w-14 h-14 rounded-2xl" :src="data.data.user.profile_image_90" :alt="data.data.user.name" />
        <div class="ml-4">
          <p>{{ data.data.user.name }}</p>
          <p>Published on {{ data.data.readable_publish_date }}</p>
        </div>
      </div>
      <article
        class="p-10 mt-12 prose-lg bg-white bg-opacity-75 shadow-inset-white rounded-3xl"
        v-html="data.data.body_html"
      ></article>
    </div>
  </section>
</template>

<style lang="postcss">
.prose-lg img {
  @apply rounded-2xl;
}
</style>
