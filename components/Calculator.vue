<script setup>
const props = defineProps(['slope', 'intercept'])

const percentage = ref(50)
const speed = ref(0.98)

const y = computed(() => Math.round((percentage.value * props.slope + props.intercept) * 100) / 100)
const x = computed(() => Math.round((speed.value - props.intercept) / props.slope))
</script>

<template>
  <div class="space-y-4">
    <UFormGroup label="La vitesse" name="username">
      <UInput :model-value="y" @update:model-value="v => speed = Number(v)">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="Le pourcentage" name="username">
      <UInput :model-value="x" @update:model-value="v => percentage = Number(v)">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">%</span>
        </template>
      </UInput>
    </UFormGroup>
  </div>
</template>
