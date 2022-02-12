<script setup lang="ts">
import Avatar from "@/assets/avatar.png"
import { Github } from "@/interface"

const { data, pending } = useLazyAsyncData("github", () => $fetch<Github>("/api/github"))
</script>

<template>
  <section class="mt-12 w-full">
    <h1 class="font-bold text-7xl font-space">About</h1>
    <img :src="Avatar" alt="" />
    {{ data }}
    {{ pending }}
  </section>
</template>
