<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Database } from '@/types/database.types'

import { linearRegression } from '@/lib/regression'

const user = await useSupabaseUser()
const client = useSupabaseClient<Database>()

const { data: analysis } = await useAsyncData('analysis', async () => {
  const { data } = await client.from('analysis').select('*, values(percent, speed)').eq('user_id', user.value!.id)
  return data
})

const items = [{
  key: 'chart',
  label: 'Le graph',
  movement: 'Front Squat'
}, {
  key: 'data',
  label: 'Les données',
  movement: 'Front Squat'
}]
</script>

<template>
  <div class="h-96" v-for="a in analysis" :key="a.id">
    <UTabs :items="items" class="w-full">
      <template #item="{item}">
        <Card :title="item.movement" description="Analyse de vitesse">
          <Chart :data="a.values" v-if="item.key == 'chart'" />
          <Form v-else />
        </Card>
      </template>
    </UTabs>
  </div>
</template>
