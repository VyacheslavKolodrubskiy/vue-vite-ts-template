<template>
  <button
    class=""
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import type { Icons, Sizes } from '~/types'
import { Logger } from '~/utils'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants
    type?: ButtonHTMLAttributes['type']
    size?: Sizes
    icon?: Icons
    outline?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    size: 'md',
    outline: false,
  },
)

type ButtonVariants =
  | 'primary'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'success'
  | 'info'
  | 'ghost'

const kek = 5

const color = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-violet-500 hover:bg-violet-500/90 ring-violet-300'
    case 'danger':
      return 'bg-red-500 hover:bg-red-500/90 ring-red-300'
    case 'info':
      return 'bg-blue-500 hover:bg-blue-500/90 ring-blue-300'
    case 'warning':
      return 'bg-yellow-500 hover:bg-yellow-500/90 ring-yellow-300'
    case 'success':
      return 'bg-green-500 hover:bg-green-500/90 ring-green-300'
    case 'dark':
      return 'bg-black hover:bg-black/90 ring-black'
    default:
      Logger.warn('doesn\'t exist of the button variant', props.variant)
      break
  }
})

const size = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4'
    case 'md':
      return 'px-8'
    case 'lg':
      return 'px-12'
    case 'xl':
      return 'px-16'
    default:
      Logger.warn('doesn\'t exist of the button size', props.size)
      break
  }
})

const classes = `py-3 ${size.value} ${color.value} focus:ring-2 rounded-lg cursor-pointer transition-colors outline-none text-white`
</script>
