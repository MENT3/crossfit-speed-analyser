<script setup>
const props = defineProps(['title', 'description'])

const percentage = ref(50)
const speed = ref(0.98)
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

  <template #footer>
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
</UCard>
</template>
