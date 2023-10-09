<script setup>
const percentage = ref(50)
const speed = ref(0.98)
</script>

<template>
  <div class="space-y-4">
    <UFormGroup label="La vitesse" name="username">
      <UInput v-model="speed">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="Le pourcentage" name="username">
      <UInput v-model="percentage">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">%</span>
        </template>
      </UInput>
    </UFormGroup>
  </div>
</template>
