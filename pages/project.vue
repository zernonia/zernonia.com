<script setup lang="ts">
import { Project } from "@/interface"
import { store } from "@/store"
import IconArrow from "~icons/feather/arrow-right"

const { data, pending } = useLazyAsyncData("project", () => $fetch<Project>("/api/notion"))

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})

watch(
  pending,
  (n) => {
    store.loading = pending.value
  },
  { immediate: true }
)
</script>

<template>
  <div class="w-full mt-12">
    <h1 class="font-bold text-7xl text-center font-space">Project</h1>
    <div v-if="!data?.data">Loading...</div>
    <div class="mt-12" v-else>
      <div
        v-for="project in data.data"
        :key="project.name"
        class="p-8 shadow-inset-white rounded-3xl flex items-center mb-8"
      >
        <img :src="project.image" class="w-3/5 object-cover w-full h-auto rounded-2xl" />
        <div class="w-2/5 ml-12">
          <h4 class="text-4xl font-bold font-space mb-4">{{ project.name }}</h4>
          <p class="mb-4">{{ project.description }}</p>
          <a class="button-next" :href="project.link" target="_blank">Visit</a>
        </div>
      </div>

      <div class="flex justify-center">
        <NuxtLink to="/blog" class="button-next group mt-12">
          Blog <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
