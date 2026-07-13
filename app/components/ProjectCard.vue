<script setup lang="ts">
import type { Project } from "~/utils/content"

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article
    class="group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-raised sm:p-8"
    :class="project.featured ? 'md:col-span-2' : ''"
  >
    <span
      class="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
      aria-hidden="true"
    />
    <div class="flex items-baseline justify-between gap-4">
      <p class="eyebrow">
        <span class="text-brand">{{ String(index + 1).padStart(2, "0") }}</span>
        <span aria-hidden="true"> / </span>{{ project.role }}
      </p>
      <Icon
        name="lucide:arrow-up-right"
        class="size-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
        aria-hidden="true"
      />
    </div>

    <h3
      class="mt-5 font-semibold tracking-tight"
      :class="project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'"
    >
      <a
        :href="project.link"
        target="_blank"
        rel="noopener"
        class="after:absolute after:inset-0 after:content-['']"
        data-umami-event="project-visit"
        :data-umami-event-project="project.name"
      >
        {{ project.name }}
      </a>
    </h3>

    <p
      class="mt-3 leading-relaxed text-mute"
      :class="project.featured ? 'max-w-xl' : 'text-sm'"
    >
      {{ project.description }}
    </p>

    <div class="mt-auto flex items-center justify-between gap-4 pt-6">
      <ul class="flex flex-wrap gap-x-4 gap-y-1" aria-label="Technologies">
        <li v-for="tag in project.tags" :key="tag" class="eyebrow">
          {{ tag }}
        </li>
      </ul>
      <a
        v-if="project.repo && project.repo !== project.link"
        :href="project.repo"
        target="_blank"
        rel="noopener"
        class="eyebrow relative z-10 flex items-center gap-1.5 transition-colors hover:text-brand"
        data-umami-event="project-source"
        :data-umami-event-project="project.name"
      >
        <Icon name="simple-icons:github" class="size-3.5" aria-hidden="true" />
        Source
      </a>
    </div>
  </article>
</template>
