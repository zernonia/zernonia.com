<script setup lang="ts">
import TwemojiStarEmoji from "~icons/twemoji/star-struck"
import TwemojiStar from "~icons/twemoji/star"
import TwemojiSparkles from "~icons/twemoji/sparkles"
import TwemojiParty from "~icons/twemoji/party-popper"
import TwemojiHands from "~icons/twemoji/raising-hands-medium-light-skin-tone"
import TwemojiMalaysia from "~icons/twemoji/flag-for-flag-malaysia"

import LogoVue from "~icons/vscode-icons/file-type-vue"
import LogoVite from "~icons/logos/vitejs"
import LogoNuxt from "~icons/logos/nuxt-icon"
import LogoTypescript from "~icons/logos/typescript-icon"
import LogoTailwind from "~icons/logos/tailwindcss-icon"
import LogoFirebase from "~icons/logos/firebase"

import IconCalendar from "~icons/uim/calender"

const messages = {
  welcome: "Welcome to my site!",
  webdev: "I love developing web app!",
  malaysia: "Hi! I'm from Malaysia",
  yearsold: "Hahaha.. I'm 25 years old today!",
  zernonia: "Hi there! That's my name!",
  tech: "I'm still learning and discovering more tech stuff!",
  blog: "Just some simple blog",
  project: "Showcase some of my masterpiece!",
  archive: "Apps that no longer in production",
  contact: "Feel free to reach out to me!",
  emoji: "👁⚡️👁",
}
const setMessage = (key: string) => {
  message.value = messages[key]
}
const message = ref("")
onMounted(() => {
  setMessage("welcome")
})
</script>

<template>
  <main class="flex items-center justify-center min-w-screen min-h-screen @dark:bg-dark-500 bg-light-50">
    <div class="relative w-full h-full max-w-screen-xl min-h-screen-lg grid grid-cols-8 grid-rows-5 gap-4">
      <section class="card relative row-span-1 col-span-2 overflow-hidden">
        <IconWeb class="absolute text-yellow-400 opacity-30 w-36 h-auto"></IconWeb>
        <h1 class="text-light-50 font-bold text-4xl text-center leading-9 z-10">
          Web <br />
          Developer
        </h1>
      </section>
      <section @mouseenter="setMessage('zernonia')" class="card row-span-1 row-start-1 col-start-3 col-span-4">
        <h1 class="font-extrabold text-8xl text-gradient from-yellow-300 to-orange-500">Zernonia</h1>
      </section>

      <section class="card col-span-2 col-start-7 row-span-2">
        <!-- <GithubCard></GithubCard> -->
      </section>

      <section class="card row-start-2 overflow-hidden">
        <TwemojiMalaysia class="w-24 h-auto"></TwemojiMalaysia>
      </section>
      <section class="card row-start-2 col-start-2 flex flex-col">
        <p class="font-bold text-6xl text-light-50">25</p>
        <p class="text-2xl text-light-50">y.o</p>
      </section>

      <section class="card relative row-start-3 row-span-2 col-span-2 flex-col items-center justify-center">
        <h2 class="title">Tech I thinker with!</h2>
        <div class="mt-6">
          <div class="flex justify-center items-center space-x-2">
            <LogoVue class="w-14 h-auto"></LogoVue>
            <LogoVite class="w-14 h-auto"></LogoVite>
            <LogoNuxt class="w-14 h-auto"></LogoNuxt>
          </div>
          <div class="flex justify-center items-center space-x-2 my-6">
            <LogoTypescript class="w-14 h-auto"></LogoTypescript>
            <LogoTailwind class="w-14 h-auto"></LogoTailwind>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <IconSupabase class="w-14 h-auto"></IconSupabase>
            <LogoFirebase class="w-14 h-auto"></LogoFirebase>
          </div>
        </div>
      </section>
      <!-- <section class="card row-start-2 col-start-2"></section> -->

      <!-- Emoji -->
      <section class="card col-span-2 col-start-7 row-start-3 row-span-1 flex flex-col items-center">
        <h2 class="title">Favourite Emoji</h2>
        <div class="p-4 flex flex-wrap space-x-3 items-center justify-between text-4xl">
          <TwemojiStarEmoji></TwemojiStarEmoji>
          <TwemojiStar></TwemojiStar>
          <TwemojiSparkles></TwemojiSparkles>
          <TwemojiParty></TwemojiParty>
          <TwemojiHands></TwemojiHands>
        </div>
      </section>

      <!-- Avatar -->
      <section class="card !p-0 row-start-2 row-span-3 col-start-3 col-span-4">
        <!-- <img src="@/assets/avatar.png" alt="Zernonia" /> -->
        <p>{{ message }}</p>
      </section>

      <!-- Nav -->
      <section class="card relative flex-col row-start-5 col-start-1 col-span-2">
        <IconBlog class="absolute w-32 h-auto opacity-30 text-blue-500"></IconBlog>
        <h2 class="text-4xl font-bold mt-2 text-light-50 z-10">Blog</h2>
      </section>
      <section class="card relative flex-col row-start-5 col-start-3 col-span-2">
        <IconProject class="absolute w-32 h-auto opacity-30 text-emerald-500"></IconProject>
        <h2 class="text-4xl font-bold mt-2 text-light-50 z-10">Project</h2>
      </section>
      <section class="card relative flex-col row-start-5 col-start-5 col-span-2">
        <IconBox class="absolute w-40 h-auto opacity-30 text-red-600"></IconBox>
        <h2 class="text-4xl font-bold mt-2 text-light-50 z-10">Archive</h2>
      </section>

      <!-- Twitter/Calendar -->
      <section class="card col-span-2 col-start-7 row-start-4 row-span-2">
        <div class="p-4 flex items-center justify-between w-full h-full">
          <a
            target="_blank"
            class="w-1/2 h-full rounded-2xl flex items-center justify-center transition hover:bg-dark-500"
            href="https://twitter.com/zernonia"
          >
            <IconTwitter class="w-16 h-16 text-blue-400"></IconTwitter>
          </a>
          <div class="h-16 w-1 bg-blue-400 bg-opacity-50 rounded-full" />
          <a
            target="_blank"
            class="w-1/2 h-full rounded-2xl flex items-center justify-center transition hover:bg-dark-500"
            href="https://cal.com/zernonia"
          >
            <IconCalendar class="w-16 h-16 text-blue-400"></IconCalendar>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="postcss">
.text-gradient {
  @apply !text-transparent  bg-clip-text bg-gradient-to-r;
}
.card {
  @apply flex items-center justify-center rounded-4xl @dark:bg-dark-900 bg-light-400 @dark:text-light-50 text-dark-50 shadow-transparent shadow-xl transform hover:scale-102 @dark:hover:shadow-dark-800 hover:shadow-light-500 transition;
}
.title {
  @apply text-2xl text-light-50 font-semibold;
}
</style>
