<script setup lang="ts">
import { MAP_DOTS, MAP_PIN, MAP_VIEWBOX } from "~/utils/mapDots"
</script>

<template>
  <figure class="relative overflow-hidden bg-surface" aria-label="Map showing Kuala Lumpur, Malaysia">
    <svg
      :viewBox="MAP_VIEWBOX"
      class="block w-full text-faint/60"
      fill="none"
      aria-hidden="true"
    >
      <!-- Land, as a dot grid -->
      <path
        :d="MAP_DOTS"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
      />
      <!-- Crosshair through Kuala Lumpur -->
      <line
        :x1="`${MAP_PIN.x}%`"
        y1="0"
        :x2="`${MAP_PIN.x}%`"
        y2="100%"
        stroke="var(--color-brand)"
        stroke-opacity="0.25"
      />
      <line
        x1="0"
        :y1="`${MAP_PIN.y}%`"
        x2="100%"
        :y2="`${MAP_PIN.y}%`"
        stroke="var(--color-brand)"
        stroke-opacity="0.25"
      />
    </svg>

    <!-- Pulsing pin -->
    <span
      class="absolute -translate-x-1/2 -translate-y-1/2"
      :style="{ left: `${MAP_PIN.x}%`, top: `${MAP_PIN.y}%` }"
      aria-hidden="true"
    >
      <span class="absolute inset-0 animate-map-ping rounded-full bg-brand/60" />
      <span
        class="absolute inset-0 animate-map-ping rounded-full bg-brand/60"
        style="animation-delay: 1.1s"
      />
      <span class="relative block size-2 rounded-full bg-brand shadow-[0_0_12px_2px_rgb(255_197_23_/_0.5)]" />
    </span>

    <figcaption
      class="pointer-events-none absolute inset-x-0 bottom-0 flex items-baseline justify-between px-4 pb-3 sm:px-5"
    >
      <span class="eyebrow text-mute">Kuala Lumpur, MY</span>
      <span class="eyebrow hidden sm:block">3.1390° N, 101.6869° E</span>
    </figcaption>
  </figure>
</template>
