<script setup lang="ts">
import { Project } from "@/interface"
import { store } from "@/store"
import IconArrow from "~icons/feather/arrow-right"
import IconLink from "~icons/feather/external-link"

const { data, pending, error } = useLazyAsyncData("project", () => $fetch<Project>("/api/notion"))

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

const { setMeta } = useCustomMeta()
setMeta("Fun Projects ⭐️ - Zernonia ")
</script>

<template>
  <div class="w-full">
    <transition name="fade" mode="out-in">
      <h1 v-if="!data?.data && !error" class="font-bold text-5xl md:text-7xl text-center font-space">Project</h1>
      <h1 v-else-if="error" class="font-bold text-5xl md:text-7xl text-center font-space">Error...</h1>
      <div v-else>
        <h1 class="font-bold text-5xl md:text-7xl text-center font-space">Project</h1>
        <div
          v-for="project in data.data"
          :key="project.name"
          class="mt-4 md:mt-12 p-6 md:p-8 shadow-inset-white dark:shadow-none rounded-3xl flex flex-col md:flex-row items-center"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="h-64 md:h-80 md:w-3/5 object-cover w-full h-auto rounded-2xl"
          />
          <div class="mt-4 md:mt-0 md:w-2/5 md:ml-12 w-full">
            <h4 class="text-2xl md:text-4xl font-bold font-space mb-2 md:mb-4">{{ project.name }}</h4>
            <p class="mb-4">{{ project.description }}</p>
            <a class="button-next group" :href="project.link" target="_blank"
              >Visit
              <IconLink class="w-5 md:w-6 h-5 md:h-6 mb-0.5 duration transition-all ml-2 md:ml-4 group-hover:ml-5" />
            </a>
          </div>
        </div>

        <div class="flex justify-center">
          <NuxtLink to="/blog" class="button-next group my-12">
            Blog <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>
