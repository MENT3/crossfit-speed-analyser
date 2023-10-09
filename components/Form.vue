<script setup lang="ts">
import { Database } from '@/types/database.types';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'onChange'])

const client = useSupabaseClient<Database>()

const saveValues = async () => {
  const { data, error } = await client.from('values').upsert(props.modelValue).select("id, percent, speed")
  emit('update:modelValue', data)
  emit('onChange')
}
</script>

<template>
  <div class="grid grid-cols-2 grid-flow-cols gap-4">
    <UFormGroup :label="`${v.percent} %`" name="name" v-for="v in props.modelValue" :key="v.id">
      <UInput type="number" v-model.number="v.speed">
        <template #trailing>
          <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
        </template>
      </UInput>
    </UFormGroup>
  </div>

  <UButton class="mt-6" size="lg" color="black" block @click="saveValues">
    Enregistrer
  </UButton>
</template>
