<template>
  <label v-if="label" :for="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :id="label"
    class="bg-transparent border text-gray-500 border-gray-500 rounded-lg w-full p-3"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    type?: string
  }>(),
  {
    type: 'text',
  },
)

defineEmits(['update:modelValue'])
</script>
