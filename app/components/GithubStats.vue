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
    stats.value[0]!.value = repo.stargazers_count
    stats.value[1]!.value = user.followers
    stats.value[2]!.value = user.public_repos
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
        <Transition name="stat" mode="out-in">
          <span :key="String(stat.value)">{{ format(stat.value) }}</span>
        </Transition>
      </dd>
      <dt class="eyebrow order-1">{{ stat.label }}</dt>
    </div>
  </dl>
</template>

<style scoped>
.stat-enter-active {
  transition: opacity 0.4s ease;
}
.stat-enter-from {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .stat-enter-active {
    transition: none;
  }
}
</style>
