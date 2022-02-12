<script setup lang="ts">
import IconArrow from "~icons/feather/arrow-right"
</script>

<template>
  <div class="p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl shadow-inset-white">
    <p class="inline-flex text-center text-2xl text-gray-500 tracking-wide">
      Hi
      <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" class="mx-2" />
      I am
    </p>
    <h1 class="text-8xl font-bold my-4 tracking-tight font-space">Supabase</h1>
    <p class="mt-6 text-xl text-gray-500 tracking-wide">Frontend Developer | IndieHacker wannabe</p>

    <button class="group mt-24">
      Explore <IconArrow class="w-6 h-6 duration transition-all ml-2 group-hover:ml-3" />
    </button>
  </div>
</template>
