<script setup lang="ts">
interface Stat {
  label: string
  value: number | null
}

const stats = ref<Stat[]>([
  { label: "Stars · Reka UI", value: null },
  { label: "GitHub followers", value: null },
  { label: "Public repos", value: null },
])

const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
})

function format(value: number | null) {
  return value === null ? "—" : formatter.format(value)
}

// Count up from zero once real values land, unless the user prefers
// reduced motion — then values snap into place.
function countUp(stat: Stat, target: number) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stat.value = target
    return
  }
  const duration = 900
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    stat.value = Math.round(target * eased)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(async () => {
  try {
    const [repo, user] = await Promise.all([
      $fetch<{ stargazers_count: number }>(
        "https://api.github.com/repos/unovue/reka-ui"
      ),
      $fetch<{ followers: number; public_repos: number }>(
        "https://api.github.com/users/zernonia"
      ),
    ])
    countUp(stats.value[0]!, repo.stargazers_count)
    countUp(stats.value[1]!, user.followers)
    countUp(stats.value[2]!, user.public_repos)
  } catch {
    // Rate-limited or offline — em dashes stay in place
  }
})
</script>

<template>
  <dl class="grid grid-cols-3">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="flex flex-col gap-2 py-1"
      :class="i > 0 ? 'border-l border-line pl-6 sm:pl-10' : ''"
    >
      <dd
        class="order-2 font-mono text-2xl font-medium tracking-tight tabular-nums sm:text-3xl"
      >
        {{ format(stat.value) }}
      </dd>
      <dt class="eyebrow order-1">{{ stat.label }}</dt>
    </div>
  </dl>
</template>
