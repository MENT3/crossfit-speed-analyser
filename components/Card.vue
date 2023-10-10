<script setup>
const props = defineProps(['title', 'description', 'r2'])
const slots = useSlots()
</script>

<template>
<UCard>
  <template #header>
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          {{ props.title }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ props.description }}
        </p>
      </div>
      <div v-if="props.r2">
        <UBadge :color="(props.r2 >= 0.95) ? 'green' : 'red'">
          R2: {{ props.r2 }}
        </UBadge>
      </div>
    </div>
  </template>
  <slot />

  <template #footer v-if="slots.footer">
    <slot name="footer" />
  </template>
</UCard>
</template>
