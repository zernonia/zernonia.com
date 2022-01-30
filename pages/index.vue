<script setup lang="ts">
import TwemojiStarEmoji from "~icons/twemoji/star-struck"
import TwemojiStar from "~icons/twemoji/star"
import TwemojiSparkles from "~icons/twemoji/sparkles"
import TwemojiParty from "~icons/twemoji/party-popper"
import TwemojiHands from "~icons/twemoji/raising-hands-medium-light-skin-tone"

import IconCalendar from "~icons/uim/calender"

const state = ref<"" | "email" | "twitter" | "website" | "name">("")
</script>

<template>
  <main class="flex items-center justify-center min-w-screen min-h-screen @dark:bg-dark-500 bg-light-50">
    <div class="relative w-full h-full max-w-screen-xl min-h-screen-lg grid grid-cols-8 grid-rows-5 gap-4">
      <section class="card row-span-1 col-span-2"></section>
      <section class="card row-span-1 row-start-1 col-start-3 col-span-4">
        <h1 class="font-extrabold text-8xl text-gradient from-yellow-300 to-orange-500">Zernonia</h1>
      </section>

      <section class="card col-span-2 col-start-7 row-span-2">
        <GithubCard></GithubCard>
      </section>

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

      <!-- Twitter/Calendar -->
      <section class="card col-span-2 col-start-7 row-start-4 row-span-1">
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

      <!-- Avatar -->
      <section class="card !p-0 row-start-2 row-span-3 col-start-3 col-span-4">
        <img src="@/assets/avatar.png" alt="" />
      </section>

      <!-- Nav -->
      <section class="card flex-col row-start-5 col-start-1 col-span-2">
        <IconBlog class="w-20 h-auto text-blue-500"></IconBlog>
        <h2 class="title mt-2 text-gradient from-blue-400 to-purple-500">Blog</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-3 col-span-2">
        <IconProject class="w-20 h-auto text-emerald-500"></IconProject>
        <h2 class="title mt-2 text-gradient from-emerald-300 to-green-500">Project</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-5 col-span-2">
        <IconBox class="w-20 h-auto text-red-600"></IconBox>
        <h2 class="title mt-2 text-gradient from-rose-400 to-red-600">Archive</h2>
      </section>
      <section class="card flex-col row-start-5 col-start-7 col-span-2">
        <IconBlog class="w-20 h-auto text-warm-gray-400"></IconBlog>
        <h2 class="title mt-2">Blog</h2>
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
