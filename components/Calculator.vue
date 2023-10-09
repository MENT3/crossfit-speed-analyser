<script setup>
const props = defineProps(['slope', 'intercept'])

const percentage = ref(50)
const speed = ref(0.98)

const y = computed(() => Math.round((percentage.value * props.slope + props.intercept) * 100) / 100)
const x = computed(() => Math.round((speed.value - props.intercept) / props.slope))
</script>

<template>
  <div class="flex flex-row items-end space-x-4">
    <UFormGroup label="La vitesse" name="username">
      <UInput
        :model-value="y"
        type="number"
        pattern="[0-9]*[.,]?[0-9]*"
        @update:model-value="v => speed = Number(v)"
      >
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UIcon name="i-heroicons-arrows-right-left" class="h-8" />

    <UFormGroup label="Le pourcentage" name="username">
      <UInput
        :model-value="x"
        type="number"
        pattern="[0-9]*[.,]?[0-9]*"
        @update:model-value="v => percentage = Number(v)"
      >
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">%</span>
        </template>
      </UInput>
    </UFormGroup>
  </div>
</template>
