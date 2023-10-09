<script setup lang="ts">
import { Database } from '@/types/database.types'

const props = defineProps(['modelValue', 'analysisId'])
const emit = defineEmits(['update:modelValue', 'onChange'])

const client = useSupabaseClient<Database>()
const toast = useToast()

const state = ref(props.modelValue)
const loading = ref(false)

async function handleUpdate(e: any) {
  loading.value = true
  const payload = e.data.map((v: any) => ({ ...v, analysis_id: props.analysisId }))

  const { data, error } = await client.from('values').upsert(payload).select("id, percent, speed")
  loading.value = false
  if (error) throw error

  toast.add({
    title: 'Notification',
    description: 'Les données ont correctements été sauvegardées',
    icon: 'i-heroicons-check-circle',
    timeout: 2500
  })

  emit('update:modelValue', data)
  emit('onChange')
}
</script>

<template>
  <UForm @submit.prevent="handleUpdate" :state="state">
    <div class="grid grid-cols-2 grid-flow-cols gap-4">
      <UFormGroup
        v-for="v in state"
        :key="v.id"
        :label="`Vitesse à ${v.percent}%`"
      >
        <UInput
          type="number"
          step="0.000001"
          inputmode="decimal"
          v-model.number="v.speed"
        >
          <template #trailing>
            <span class="text-gray-500 dark:text-gray-400 text-xs">m/s</span>
          </template>
        </UInput>
      </UFormGroup>
    </div>

    <UButton type="submit" :loading="loading" class="mt-6" size="md" color="black" block>
      Enregistrer
    </UButton>
  </UForm>
</template>
