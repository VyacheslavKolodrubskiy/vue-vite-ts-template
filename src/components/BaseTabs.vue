<template>
  <ul class="p-2 bg-gray-500/5 rounded-lg inline-flex space-x-1">
    <li v-for="option in options" :key="option">
      <BaseButton
        class="hover:bg-primary transition-colors py-2 px-6 text-white rounded-lg cursor-pointer"
        :class="modelValue === option && 'bg-primary'"
        variant="ghost"
        @click="$emit('update:modelValue', option)"
      >
        {{ option }}
      </BaseButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  options: string[]
}>()

defineEmits(['update:modelValue'])
</script>
