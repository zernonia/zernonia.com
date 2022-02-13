<script setup lang="ts">
import Avatar from "@/assets/avatar.png"
import { Github } from "@/interface"

const { data, pending } = useLazyAsyncData("github", () => $fetch<Github>("/api/github"))
</script>

<template>
  <section class="mt-12 w-full flex flex-col items-center">
    <h1 class="font-bold text-7xl text-center font-space">Zernonia</h1>
    <h2 class="mt-4 text-4xl text-center">
      Frontend Developer <br />
      Based in Malaysia
    </h2>
    <div class="mt-12 flex">
      <div></div>
      <img :src="Avatar" alt="Zernonia" class="rounded-4xl" />
      <div></div>
    </div>
    {{ data }}
    {{ pending }}
  </section>
</template>
