<script setup>
const props = defineProps(['title', 'description'])
const slots = useSlots()
</script>

<template>
<UCard>
  <template #header>
    <h3 class="text-base font-semibold leading-6 text-gray-900">
      {{ props.title }}
    </h3>
    <p class="mt-1 text-sm text-gray-500">
      {{ props.description }}
    </p>
  </template>
  <slot />

  <template #footer v-if="slots.footer">
    <slot name="footer" />
  </template>
</UCard>
</template>
