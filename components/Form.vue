<script setup>
const accountForm = ref({name: '', username: ''})
</script>

<template>
  <div class="grid grid-cols-2 grid-flow-cols gap-4">
    <UFormGroup label="20%" name="name">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="30%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="40%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="50%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="60%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="70%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="80%" name="username">
      <UInput>
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>
  </div>

  <UButton class="mt-6" size="lg" color="black" block>Enregistrer</UButton>
</template>
