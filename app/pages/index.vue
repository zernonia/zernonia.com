<script setup lang="ts">
import avatar from "~/assets/img/avatar.png"

useSeoMeta({
  title: site.title,
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogType: "website",
  ogUrl: site.url,
  ogImage: `${site.url}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Zernonia — Frontend Developer & Open Source Maintainer",
  twitterCard: "summary_large_image",
  twitterCreator: site.twitterHandle,
})

useHead({
  link: [{ rel: "canonical", href: `${site.url}/` }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        url: site.url,
        email: `mailto:${site.email}`,
        jobTitle: "Frontend Developer",
        description: site.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kuala Lumpur",
          addressCountry: "MY",
        },
        sameAs: [site.github, site.twitter],
      }),
    },
  ],
})

const facts = [
  { label: "Location", value: "Kuala Lumpur, MY 🇲🇾" },
  { label: "Focus", value: "Vue · Nuxt · TypeScript" },
  { label: "Background", value: "BSc Actuarial Science" },
  { label: "Elsewhere", value: "unovue.com", href: "https://github.com/unovue" },
]
</script>

<template>
  <div>
    <!-- ============================== Hero ============================== -->
    <PageSection first>
      <div class="bg-blueprint absolute inset-0" aria-hidden="true" />

      <div
        class="relative px-5 pt-24 pb-16 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12"
      >
        <p class="eyebrow hero-in">
          <span class="text-brand" aria-hidden="true">+</span>
          Frontend Developer — Open Source Maintainer
        </p>

        <h1
          class="hero-in mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          style="--hero-delay: 80ms"
        >
          Hi, I'm Zernonia<span class="text-brand">.</span><br />
          I craft open-source tools for the Vue ecosystem.
        </h1>

        <p
          class="hero-in mt-8 max-w-xl leading-relaxed text-mute sm:text-lg"
          style="--hero-delay: 160ms"
        >
          Self-taught developer from {{ site.location }} — creator of
          <a
            href="https://reka-ui.com"
            target="_blank"
            rel="noopener"
            class="text-ink underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand"
            >Reka UI</a
          >, core team at
          <a
            href="https://shadcn-vue.com"
            target="_blank"
            rel="noopener"
            class="text-ink underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand"
            >shadcn-vue</a
          >, and a serial hackathon tinkerer.
        </p>

        <div
          class="hero-in mt-10 flex flex-wrap items-center gap-4"
          style="--hero-delay: 240ms"
        >
          <a
            href="#projects"
            class="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 font-mono text-sm font-medium text-canvas transition-colors hover:bg-brand-bright"
          >
            Explore projects
            <Icon name="lucide:arrow-down" class="size-4" aria-hidden="true" />
          </a>
          <a
            :href="site.github"
            target="_blank"
            rel="noopener"
            class="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-6 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Icon name="simple-icons:github" class="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div
          class="hero-in mt-16 border-t border-line pt-8 sm:mt-24"
          style="--hero-delay: 320ms"
        >
          <GithubStats />
        </div>
      </div>
    </PageSection>

    <!-- ============================ Stack strip ========================== -->
    <PageSection aria-label="Technology stack">
      <ul
        class="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-5 sm:gap-x-6 sm:px-8 lg:px-12"
      >
        <template v-for="(tech, i) in stack" :key="tech">
          <li v-if="i > 0" class="font-mono text-xs text-brand/60" aria-hidden="true">
            +
          </li>
          <li class="eyebrow text-mute">{{ tech }}</li>
        </template>
      </ul>
    </PageSection>

    <!-- ============================== About ============================= -->
    <PageSection id="about">
      <div
        class="grid gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-12"
      >
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="Self-taught, curiosity-driven."
          />
          <img
            :src="avatar"
            alt="Portrait of Zernonia"
            width="480"
            height="480"
            loading="lazy"
            decoding="async"
            class="mt-10 w-full max-w-60 border border-line grayscale transition duration-500 hover:grayscale-0"
          />
        </Reveal>

        <Reveal :delay="100">
          <div class="space-y-5 leading-relaxed text-mute">
            <p>
              I hold a Bachelor's degree in Actuarial Science, but my passion
              has always been programming. So I taught myself to code, went all
              in on the web, and never looked back.
            </p>
            <p>
              These days I spend most of my time in open source — building
              accessible component primitives with
              <span class="text-ink">Reka UI</span>, helping maintain
              <span class="text-ink">shadcn-vue</span>, and shipping side
              projects whenever a hackathon (or a random idea at 2am) comes
              along.
            </p>
            <p>
              I speak quite a number of languages — and not just the
              programming kind. 😄
            </p>
          </div>

          <dl class="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            <div
              v-for="fact in facts"
              :key="fact.label"
              class="bg-surface px-5 py-4"
            >
              <dt class="eyebrow">{{ fact.label }}</dt>
              <dd class="mt-1.5 font-mono text-sm text-ink">
                <a
                  v-if="fact.href"
                  :href="fact.href"
                  target="_blank"
                  rel="noopener"
                  class="transition-colors hover:text-brand"
                  >{{ fact.value }}</a
                >
                <template v-else>{{ fact.value }}</template>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </PageSection>

    <!-- ============================= Projects ============================ -->
    <PageSection id="projects">
      <div class="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <SectionHeading
            index="02"
            label="Projects"
            title="Things I've built."
            description="Open-source libraries and tools, used by teams around the world. All of it free, all of it on GitHub."
          />
        </Reveal>

        <Reveal :delay="100">
          <div
            class="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2"
          >
            <ProjectCard
              v-for="(project, i) in projects"
              :key="project.name"
              :project="project"
              :index="i"
            />

            <!-- Filler cell that balances the grid and links to everything else -->
            <a
              :href="site.github"
              target="_blank"
              rel="noopener"
              class="group flex min-h-44 flex-col justify-between bg-surface p-6 transition-colors duration-300 hover:bg-raised sm:p-8"
            >
              <div class="flex items-baseline justify-between gap-4">
                <p class="eyebrow">
                  <span class="text-brand">05</span>
                  <span aria-hidden="true"> / </span>And more
                </p>
                <Icon
                  name="lucide:arrow-up-right"
                  class="size-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              </div>
              <p
                class="mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-brand sm:text-2xl"
              >
                Explore everything on GitHub
                <span class="text-brand" aria-hidden="true">→</span>
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </PageSection>

    <!-- ============================= Contact ============================= -->
    <PageSection id="contact">
      <div
        class="relative flex flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-36 lg:px-12"
      >
        <div class="bg-blueprint absolute inset-0 rotate-180" aria-hidden="true" />

        <Reveal class="relative flex flex-col items-center">
          <p class="eyebrow">
            <span class="text-brand">03</span>
            <span aria-hidden="true"> — </span>Contact
          </p>
          <h2
            class="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Let's build something great together<span class="text-brand"
              >.</span
            >
          </h2>
          <p class="mt-5 max-w-md leading-relaxed text-mute">
            Open to collaborations, open-source ideas, or just a friendly chat
            about Vue and the web.
          </p>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              :href="`mailto:${site.email}`"
              class="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 font-mono text-sm font-medium text-canvas transition-colors hover:bg-brand-bright"
            >
              <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
              {{ site.email }}
            </a>
            <a
              :href="site.twitter"
              target="_blank"
              rel="noopener"
              class="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-6 font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Icon name="simple-icons:x" class="size-3.5" aria-hidden="true" />
              Follow me
            </a>
          </div>
        </Reveal>
      </div>
    </PageSection>
  </div>
</template>
