<script setup lang="ts">
import Avatar from "@/assets/avatar.png"
import { Github } from "@/interface"
import IconVue from "~icons/simple-icons/vuedotjs"
import IconNuxt from "~icons/simple-icons/nuxtdotjs"
import IconTypescript from "~icons/simple-icons/typescript"
import IconVite from "~icons/simple-icons/vite"
import IconTailwind from "~icons/simple-icons/tailwindcss"
import IconSupabase from "~icons/simple-icons/supabase"
import IconPostgres from "~icons/simple-icons/postgresql"
import IconTwitter from "~icons/simple-icons/twitter"
import IconGithub from "~icons/simple-icons/github"

import IconArrow from "~icons/feather/arrow-right"

const { data, pending } = useLazyAsyncData("github", () => $fetch<Github>("/api/github"))

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
})
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <div class="mt-12 px-8 py-24 shadow-inset-white dark:shadow-none rounded-4xl flex flex-col items-center">
      <h1 class="font-bold text-7xl text-center font-space">Zernonia</h1>
      <h2 class="mt-4 text-2xl text-center text-gray-500 dark:text-gray-300">Self-taught Frontend Developer <br /></h2>
      <div class="mt-12 grid grid-cols-4 gap-10">
        <div class="info text-right">
          <div>
            <h5>Basic</h5>
            <p>
              I'm 25 years old, Malaysian Chinese 🇲🇾 . I can speak quite a number of language, not just progamming
              language 😂
            </p>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>Kuala Lumpur, Malaysia</li>
              <li>zernonia@gmail.com</li>
              <li class="text-gray-300 gap-4 text-3xl flex justify-end mt-4"><IconTwitter /><IconGithub /></li>
            </ul>
          </div>
        </div>
        <img :src="Avatar" alt="Zernonia" class="rounded-4xl col-span-2" />
        <div class="info">
          <div>
            <h5>Language/Framework</h5>
            <p class="text-gray-300 grid grid-cols-[repeat(auto-fill,minmax(15%,36px))] gap-4 text-3xl">
              <IconVue /><IconNuxt /><IconTypescript /><IconVite /><IconTailwind /><IconPostgres /><IconSupabase />
            </p>
          </div>
          <div>
            <h5>Github Stats</h5>
            <ul>
              <li>Stars: {{ data?.total_stars ?? 0 }}</li>
              <li>Commit: {{ data?.total_commits ?? 0 }}</li>
              <li>Followers: {{ data?.followers ?? 0 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <NuxtLink to="/project" class="button-next group mt-16">
        Project <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="postcss">
.info {
  @apply flex flex-col justify-center;
}
.info h5 {
  @apply font-bold text-gray-500 dark:text-warm-gray-500 mb-4;
}
.info p,
info ul {
  @apply mb-12;
}
</style>
