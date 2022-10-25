<template>
  <svg
    :class="$attrs.class || 'w-5 h-5'"
    :fill="fill"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icon"
  ></svg>
</template>

<script setup lang="ts">
import { icons } from '~/icons'
import type { Icons } from '~/types'

const props = withDefaults(
  defineProps<{
    name: Icons
    fill?: string
    viewBox?: string
  }>(),
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
)

const icon = computed(() => icons[props.name])
</script>
