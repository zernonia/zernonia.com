<script setup lang="ts">
import Avatar from "@/assets/avatar.png"
import { Github } from "@/interface"

const { data, pending } = useLazyAsyncData("github", () =>
  $fetch<Github>("/api/github")
)

const { setMeta } = useCustomMeta()
setMeta("Wanna know more about me? ☺️ - Zernonia")
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <div
      class="w-full max-w-screen-md px-6 sm:px-8 md:px-16 py-6 md:py-12 shadow-inset-white dark:shadow-none rounded-4xl flex flex-col items-center"
    >
      <h1
        class="font-bold text-5xl md:text-7xl text-center font-space tracking-tight"
      >
        Zernonia
      </h1>
      <h2
        class="mt-4 text-xl md:text-2xl text-center text-gray-500 dark:text-gray-300"
      >
        Self-taught Frontend Developer <br />
      </h2>
      <div class="mt-12 flex flex-col items-center">
        <img :src="Avatar" alt="Zernonia" class="rounded-4xl w-full max-w-96" />
        <div class="info mt-12">
          <div>
            <h5>Basic</h5>
            <p>
              I'm 25 years old, Malaysian Chinese 🇲🇾 . I can speak quite a
              number of language, not just progamming language 😂 I have a
              Bachelor degree of Actuarial Science, but my passion always had
              been programming. So, I decided to learn programming online and
              slowly venture into the world of Programming!
            </p>
          </div>

          <div class="flex flex-col md:flex-row w-full">
            <div class="md:w-1/2">
              <h5>Language/Framework</h5>
              <p class="framework text-gray-300 flex flex-wrap text-3xl">
                <span class="mr-2 i-simple-icons-vuedotjs" />
                <span class="mr-2 i-simple-icons-nuxtdotjs" />
                <span class="mr-2 i-simple-icons-typescript" />
                <span class="mr-2 i-simple-icons-vite" />
                <span class="mr-2 i-simple-icons-tailwindcss" />
                <span class="mr-2 i-simple-icons-postgresql" />
                <span class="i-simple-icons-supabase" />
              </p>
            </div>
            <div class="mt-12 md:mt-0 md:ml-16 md:w-1/2">
              <h5>GitHub Stats</h5>
              <ul>
                <li class="flex mb-2 items-center">
                  <div class="i-feather-star text-gray-300 text-xl mr-2" />
                  Stars: {{ data?.total_stars ?? 0 }}
                </li>
                <li class="flex mb-2 items-center">
                  <div
                    class="i-feather-git-commit text-gray-300 text-xl mr-2"
                  />
                  Commit: {{ data?.total_commits ?? 0 }}
                </li>
                <li class="flex mb-2 items-center">
                  <div
                    class="i-feather-trending-up text-gray-300 text-xl mr-2"
                  />
                  Followers: {{ data?.followers ?? 0 }}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>Kuala Lumpur, Malaysia</li>
              <li>zernonia@gmail.com</li>
              <li class="text-gray-300 gap-4 text-3xl flex mt-4">
                <a href="https://twitter.com/zernonia" target="_blank">
                  <div class="i-simple-icons-twitter" />
                </a>
                <a href="https://github.com/zernonia" target="_blank">
                  <div class="i-simple-icons-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NuxtLink to="/project" class="button-next group mt-12">
        Project
        <div
          class="i-feather-arrow-right w-6 h-6 duration transition-all ml-2 group-hover:ml-3"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="postcss">
.info {
  @apply flex flex-col justify-center;
}
.info h5 {
  @apply text-lg md:text-xl font-bold text-gray-500 dark:text-warm-gray-500 mb-4;
}
.info > div {
  @apply mb-12;
}

.framework > svg {
  @apply mb-2 mr-2;
}
</style>
