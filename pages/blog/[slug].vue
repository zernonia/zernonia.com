<script setup lang="ts">
import { DevToPost } from "@/interface"
import { store } from "@/store"
const route = useRoute()

const article = ref<HTMLElement>()
const { data, pending, error } = await useLazyAsyncData(
  `blog-${route.params.slug}`,
  () => $fetch<DevToPost>(`/api/devto/${route.params.slug}`)
)

const { setMeta } = useCustomMeta()
watch(
  pending,
  () => {
    store.loading = pending.value
    if (data.value) {
      setMeta(
        data.value.data.title,
        data.value.data.description,
        data.value.data.cover_image
      )
    } else {
      setMeta("Loading... - Zernonia")
    }
  },
  { immediate: true }
)

watch(article, () => {
  // populate target _blank to all links
  let links = article.value?.getElementsByTagName("a")
  if (!links?.length) return
  for (var i = 0; i < links.length; i++) {
    links[i].target = "_blank"
  }

  // populate click listener to element with data-url
  const urls = document.querySelectorAll("div[data-url]")
  for (var i = 0; i < urls.length; i++) {
    let url = urls[i]
    url.addEventListener("click", (ev) => {
      // @ts-ignore
      if (ev.target.href || ev.path?.[1]?.href) return
      // @ts-ignore
      window.open(url.dataset.url, "_blank")
    })
  }
})
</script>

<template>
  <section>
    <transition name="fade" mode="out-in">
      <h1
        class="font-bold text-5xl md:text-7xl text-center font-space"
        v-if="!data?.data && !error"
      >
        Loading...
      </h1>
      <h1
        class="font-bold text-5xl md:text-7xl text-center font-space"
        v-else-if="error"
      >
        Error...
      </h1>
      <div v-else-if="data">
        <div class="p-2">
          <NuxtLink
            to="../blog"
            class="inline-flex items-center text-base bg-transparent text-warm-gray-400 dark:text-light-900 group"
          >
            <div
              class="i-feather-arrow-left w-4 h-4 duration transition-all mr-2 group-hover:mr-3"
            />
            Back
          </NuxtLink>
          <img
            class="mt-4 rounded-3xl md:rounded-4xl"
            :src="data.data.cover_image"
            :alt="data.data.title"
          />
          <h2
            class="mt-6 md:mt-12 text-4xl md:text-6xl font-bold font-space tracking-tight"
          >
            {{ data.data.title }}
          </h2>
          <div class="mt-4 flex items-center">
            <img
              class="w-14 h-14 rounded-2xl"
              :src="data.data.user.profile_image_90"
              :alt="data.data.user.name"
            />
            <div class="ml-4">
              <p>{{ data.data.user.name }}</p>
              <p>Published on {{ data.data.readable_publish_date }}</p>
            </div>
          </div>
        </div>

        <article
          ref="article"
          class="p-6 md:p-10 my-12 prose max-w-none bg-white dark:bg-dark-900 bg-opacity-75 shadow-inset-white dark:shadow-none rounded-3xl"
          v-html="data.data.body_html"
        ></article>

        <div class="flex justify-center mb-12">
          <a
            class="button-next text-center"
            :href="data.data.url + '#comments'"
            target="_blank"
          >
            Check out the post's comment ({{ data.data.comments_count }})
          </a>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="postcss">
.prose-lg img {
  @apply rounded-2xl;
}
.highlight__panel-action {
  @apply hidden;
}

pre {
  @apply !bg-light-400 !dark:bg-dark-700 !rounded-2xl overflow-x-auto;
}

.ltag__twitter-tweet,
.ltag-github-readme-tag {
  @apply mx-auto max-w-500px rounded-2xl overflow-hidden !pl-0 text-dark-800 bg-light-200 dark:bg-dark-600 dark:text-light-900 text-base;
}

.ltag-github-readme-tag img,
.ltag-github-readme-tag h2 {
  @apply !my-0 !text-xl;
}

.ltag-github-readme-tag h3 {
  @apply mt-2 !my-0 !text-base !font-normal;
}

.ltag__twitter-tweet__main {
  @apply cursor-pointer;
}
.ltag__twitter-tweet__main,
.ltag-github-readme-tag {
  @apply !p-4 !md:p-12;
}
.ltag__twitter-tweet__header {
  @apply relative h-20;
}
.ltag__twitter-tweet__profile-image {
  @apply absolute left-0 top-0;
}
.ltag__twitter-tweet__full-name {
  @apply absolute left-16 top-1;
}
.ltag__twitter-tweet__username {
  @apply absolute left-16 top-7 text-sm;
}
.ltag__twitter-tweet__twitter-logo {
  @apply absolute right-0 top-4;
}
.ltag__twitter-tweet__date {
  @apply text-sm text-dark-50 py-0.5;
}
.ltag__twitter-tweet__actions {
  @apply flex space-x-8 mt-1;
}

.readme-overview h2 {
  @apply flex items-center;
}
.readme-overview h2 a {
  @apply mx-2;
}
.readme-overview h2 img {
  @apply filter dark:invert-100;
}

.ltag-github-body {
  @apply max-h-96 relative overflow-hidden;
}
.ltag-github-body:after {
  @apply content-[''] absolute z-1 bottom-0 left-0 pointer-events-none w-full h-28 bg-fade-white dark:bg-fade-dark;
}
.gh-btn-container {
  @apply flex justify-center;
}
.gh-btn-container .gh-btn {
  @apply !text-white;
}
</style>
