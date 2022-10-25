<template>
  <label class="inline-flex relative items-center cursor-pointer" :for="label">
    <input
      :id="label"
      :checked="modelValue"
      class="sr-only peer"
      type="checkbox"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    >
    <div :class="classes" />
    <span
      v-if="label"
      class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { Sizes } from '~/types'
import { Logger } from '~/utils'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    label?: string
    size?: Sizes
  }>(),
  {
    size: 'md',
  },
)

defineEmits(['update:modelValue'])

const classes = computed(() => {
  const defaultClasses = [
    'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600',
  ]

  switch (props.size) {
    case 'sm':
      defaultClasses.push('w-9 h-5')
      break
    case 'md':
      defaultClasses.push('w-11 h-6')
      break
    case 'lg':
      defaultClasses.push('w-14 h-7')
      break
    default:
      Logger.warn('doesn\'t exist of the toggle size', props.size)
      break
  }

  return defaultClasses
})
</script>
