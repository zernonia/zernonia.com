<script setup lang="ts">
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement>()

// Scroll-position based reveal: unlike a bare IntersectionObserver it can't
// miss elements when the page jumps (anchor links, End key, restored scroll).
onMounted(() => {
  const node = el.value
  if (!node) return

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.classList.add("is-visible")
    return
  }

  let ticking = false
  const check = () => {
    ticking = false
    const top = node.getBoundingClientRect().top
    if (top < window.innerHeight - 40 || top < 0) {
      node.classList.add("is-visible")
      cleanup()
    }
  }
  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(check)
    }
  }
  const cleanup = () => {
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onScroll)
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onScroll, { passive: true })
  check()
  onUnmounted(cleanup)
})
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :style="delay ? { '--reveal-delay': `${delay}ms` } : undefined"
  >
    <slot />
  </div>
</template>
