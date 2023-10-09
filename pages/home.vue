<script setup lang="ts">
import { Database } from '@/types/database.types'

const user = await useSupabaseUser()
const client = useSupabaseClient<Database>()

const { data: analysis } = await useAsyncData('analysis', async () => {
  const { data } = await client.from('analysis').select('*, values(id, percent, speed), movements(id, key, name)').eq('user_id', user.value!.id)
  return data
})

const selected = ref(0)

const addMovement = async () => {
  const { data: newAnalysis, aError } = await client.from('analysis').insert({ user_id: user.value!.id }).select('id').single()
  if (aError) throw aError

  const valuesPayload = [...Array(7)].map((_, i) => ({ analysis_id: newAnalysis.id, percent: (i+2)*10, speed: 0.5}))
  const { data, error } = await client.from('values').upsert(valuesPayload)
  if (error) throw error
}

const items = [{
  slot: 'chart',
  label: 'Calculateurs'
}, {
  slot: 'data',
  label: 'Les données'
}]
</script>

<template>
  <UTabs :items="items" class="w-full" v-model="selected">
    <template #chart="{ item }">
      <div class="flex flex-col space-y-4">
        <Card :title="a.movements.name" description="Analyse de vitesse" v-for="a in analysis" :key="a.id">
          <Chart :data="a.values" />

          <template #footer>
            <Calculator />
          </template>
        </Card>
      </div>
    </template>

    <template #data="{ item }">
      <div class="flex flex-col space-y-4">
        <Card :title="a.movements.name" description="Analyse de vitesse" v-for="a in analysis" :key="a.id">
          <Form v-model="a.values" @on-change="selected=0" />
        </Card>
      </div>
    </template>
  </UTabs>

  <div class="w-full mt-4">
    <UButton color="black" variant="solid" size="xl" block @click="addMovement">
      Ajouter un mouvement
    </UButton>
  </div>
</template>
