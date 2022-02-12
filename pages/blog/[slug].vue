<script setup lang="ts">
import { DevToPost } from "@/interface"
const route = useRoute()
const response = await useFetch(`/api/devto/${route.params.slug}`)
const data = computed(() => response.data.value as DevToPost)
</script>

<template>
  <section>
    <div class="prose" v-html="data.data.body_html"></div>
  </section>
</template>
