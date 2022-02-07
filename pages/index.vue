<script setup lang="ts">
import GradientBg from "@/assets/gradient.png"

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
import IconCross from "~icons/mdi/cross"

const messages = {
  welcome: "Welcome to my site!",
  webdev: "I'm a self taugh Web Dev!",
  github: "My Github stats",
  malaysia: "Hi! I'm from Malaysia",
  yearsold: "Hahaha.. I'm 25 years old today!",
  zernonia: "Hi there! That's my name!",
  tech: "I'm still learning & discovering more stuff!",
  blog: "Just some simple blog",
  project: "Showcase some of my masterpiece!",
  archive: "Apps that no longer in production",
  contact: "Feel free to reach out to me!",
  emoji: "👁⚡️👁",
  language: "These are the langugae I speak",
  cross: "I'm a Christian! And I'm proud to be",
}
const setMessage = (key: keyof typeof messages) => {
  message.value = messages[key]
}
const message = ref("")
onMounted(() => {
  setMessage("welcome")
})
</script>

<template>
  <main class="p-6 flex items-center justify-center min-w-screen min-h-screen @dark:bg-dark-500 bg-light-50">
    <div
      class="relative w-full h-full max-w-screen-xl min-h-screen-lg grid grod-cols-4 md:grid-cols-8 lg:grid-rows-5 gap-4"
    >
      <section @mouseenter="setMessage('webdev')" class="card relative row-span-1 col-span-2 overflow-hidden">
        <IconWeb class="absolute text-yellow-200 opacity-30 w-16 lg:w-30 h-auto"></IconWeb>
        <h1 class="text-light-50 font-bold text-3xl lg:text-4xl text-center lg:leading-9 z-10">
          Web <br />
          Developer
        </h1>
      </section>
      <section @mouseenter="setMessage('zernonia')" class="card row-span-1 row-start-1 col-start-3 col-span-4">
        <h1
          class="font-extrabold text-5xl lg:text-8xl text-gradient from-yellow-300 via-blue-300 via-purple-100 to-purple-200"
        >
          Zernonia
        </h1>
      </section>

      <section @mouseenter="setMessage('github')" class="card col-span-2 col-start-7 row-span-2">
        <!-- <GithubCard></GithubCard> -->
      </section>

      <section @mouseenter="setMessage('malaysia')" class="card row-start-2 overflow-hidden">
        <TwemojiMalaysia class="w-16 lg:w-24 h-auto"></TwemojiMalaysia>
      </section>
      <section @mouseenter="setMessage('yearsold')" class="card row-start-2 col-start-2 flex flex-col">
        <p class="font-bold text-4xl lg:text-6xl text-light-50">25</p>
        <p class="text-2xl text-light-50">y.o</p>
      </section>

      <section
        @mouseenter="setMessage('tech')"
        class="card relative row-start-3 row-span-2 col-span-2 flex-col items-center justify-center"
      >
        <h2 class="title">Tech I tinker with!</h2>
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

      <!-- Avatar -->
      <section class="card !p-0 row-start-2 row-span-3 col-start-3 col-span-4 overflow-hidden">
        <div class="relative w-full h-full flex flex-col items-center justify-center bg-cover bg-no-repeat">
          <img src="@/assets/avatar.png" alt="Zernonia" />
          <transition mode="out-in" name="fade">
            <p
              :key="message"
              class="absolute bottom-0 w-full h-20 text-center text-gradient from-yellow-300 via-blue-300 via-purple-100 to-purple-200 font-bold text-3xl"
            >
              {{ message }}
            </p>
          </transition>
        </div>
      </section>

      <!-- Emoji -->
      <section
        @mouseenter="setMessage('emoji')"
        class="card col-span-2 col-start-7 row-start-3 row-span-1 flex flex-col items-center"
      >
        <h2 class="title">Favourite Emoji</h2>
        <div class="p-4 flex flex-wrap space-x-1 lg:space-x-3 items-center justify-between text-2xl lg:text-4xl">
          <TwemojiStarEmoji></TwemojiStarEmoji>
          <TwemojiStar></TwemojiStar>
          <TwemojiSparkles></TwemojiSparkles>
          <TwemojiParty></TwemojiParty>
          <TwemojiHands></TwemojiHands>
        </div>
      </section>

      <section @mouseenter="setMessage('language')" class="card col-start-7 row-start-4">
        <p class="text-base lg:text-xl font-bold text-light-50">
          Hello <br />
          你好 <br />
          안녕하세요 <br />
          Apa Khabar <br />
        </p>
      </section>
      <section @mouseenter="setMessage('cross')" class="card col-start-8 row-start-4">
        <IconCross class="w-16 h-auto"></IconCross>
      </section>

      <!-- Nav -->
      <NuxtLink
        to="/blog"
        @mouseenter="setMessage('blog')"
        class="card p-4 group relative flex-col row-start-5 col-start-1 col-span-2"
      >
        <IconBlog
          class="absolute w-24 lg:w-32 h-auto text-warm-gray-700 transition-all duration-300 group-hover:w-24"
        ></IconBlog>
        <div class="w-full h-full flex items-center justify-center rounded-2xl transition group-hover:bg-dark-500">
          <h2
            class="text-3xl lg:text-5xl leading-loose font-bold text-gradient from-blue-100 to-purple-400 underline underline-offset-2 underline-blue-300 z-10"
          >
            Blog
          </h2>
        </div>
      </NuxtLink>
      <NuxtLink
        @mouseenter="setMessage('project')"
        class="card p-4 group relative flex-col row-start-5 col-start-3 col-span-2"
        to="/project"
      >
        <IconProject
          class="absolute w-24 lg:w-32 h-auto text-warm-gray-700 transition-all duration-300 group-hover:w-24"
        ></IconProject>
        <div class="w-full h-full flex items-center justify-center rounded-2xl transition group-hover:bg-dark-500">
          <h2
            class="text-3xl lg:text-5xl leading-loose font-bold text-gradient from-yellow-300 via-yellow-200 to-orange-300 underline underline-offset-2 underline-yellow-200 z-10"
          >
            Project
          </h2>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/archive"
        @mouseenter="setMessage('archive')"
        class="card p-4 group relative flex-col row-start-5 col-start-5 col-span-2"
      >
        <IconBox
          class="absolute w-30 lg:w-40 h-auto text-warm-gray-700 transition-all duration-300 group-hover:w-32"
        ></IconBox>
        <div class="w-full h-full flex items-center justify-center rounded-2xl transition group-hover:bg-dark-500">
          <h2
            class="text-3xl lg:text-5xl leading-loose font-bold text-gradient from-green-300 to-emerald-500 underline underline-offset-2 underline-green-300 z-10"
          >
            Archive
          </h2>
        </div>
      </NuxtLink>

      <!-- Twitter/Calendar -->
      <section @mouseenter="setMessage('contact')" class="card col-span-2 col-start-7 row-start-5 row-span-1">
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
  @apply p-4 flex items-center justify-center rounded-4xl @dark:bg-dark-900 bg-light-400 @dark:text-light-50 text-dark-50 shadow-transparent shadow-xl transform hover:scale-102 @dark:hover:shadow-dark-800 hover:shadow-light-500 transition;
}
.title {
  @apply text-lg lg:text-2xl text-light-50 font-semibold;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
