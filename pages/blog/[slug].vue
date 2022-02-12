<script setup lang="ts">
import { DevToPost } from "@/interface"
const route = useRoute()

const { data } = await useLazyAsyncData(`blog-${route.params.slug}`, () =>
  $fetch<DevToPost>(`/api/devto/${route.params.slug}`)
)
</script>

<template>
  <section>
    <div v-if="!data"></div>
    <div v-else class="prose" v-html="data.data.body_html"></div>
  </section>
</template>
