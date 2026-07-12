<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    /** First section sits flush under the header — skip its own top border */
    first?: boolean
  }>(),
  { first: false }
)
</script>

<template>
  <section
    :id="id"
    class="relative scroll-mt-16"
    :class="first ? '' : 'border-t border-line'"
  >
    <PlusMark class="absolute -top-[5px] -left-[5px] hidden lg:block" />
    <PlusMark class="absolute -top-[5px] -right-[5px] hidden lg:block" />
    <slot />
  </section>
</template>
