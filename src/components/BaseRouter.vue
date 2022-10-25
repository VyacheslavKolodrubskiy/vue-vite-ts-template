<template>
  <RouterLink :to="{ name: to, params }">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteParams } from 'vue-router'
import type { Pages } from '~/enums'

defineProps<{
  to: keyof typeof Pages
  params?: RouteParams
}>()
</script>
