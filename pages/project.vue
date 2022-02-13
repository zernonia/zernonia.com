<script setup lang="ts">
import { Project } from "@/interface"

const { data } = useLazyAsyncData("project", () => $fetch<Project>("/api/notion"))
</script>

<template>
  <div class="w-full mt-12">
    <h1 class="font-bold text-7xl text-center font-space">Project</h1>
    <div v-if="!data?.data">Loading...</div>
    <div class="mt-12" v-else>
      <ul>
        <li v-for="project in data.data">
          <img :src="project.image" :alt="project.name" />
          {{ project.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
