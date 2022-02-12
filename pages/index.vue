<script setup lang="ts">
import IconArrow from "~icons/feather/arrow-right"
</script>

<template>
  <div class="p-32 flex flex-col items-center justify-center">
    <p class="inline-flex text-center text-2xl text-gray-400 tracking-wide">
      Hi
      <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" class="mx-2" />
      I am
    </p>
    <h1 class="text-8xl font-bold my-4 tracking-tight font-space">Zernonia</h1>
    <p class="mt-6 text-xl text-gray-400 tracking-wide">Frontend Developer | IndieHacker wannabe</p>

    <button
      class="mt-24 inline-flex items-center px-8 py-3 min-w-8 bg-black text-xl tracking-wide text-white font-semibold rounded-lg shadow-none hover:shadow-2xl transition duration-300"
    >
      Explore <IconArrow class="w-6 h-6 ml-2" />
    </button>
  </div>
</template>
