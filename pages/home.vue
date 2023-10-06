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

const chartData = data => ({
  labels: Object.keys(data),
  datasets: [
    {
      label: 'Vitesse (m/s)',
      data: Object.values(data),
      pointRadius: 3,
      pointBorderColor: 'black',
      pointBackgroundColor: 'black',
      borderColor: 'lightgrey',
      showLine: false,
      trendlineLinear: {
        lineStyle: 'solid',
        width: 2
      }
    }
  ]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="h-96" v-for="a in analysis" :key="a.id">
    <Line :options="chartOptions" :data="chartData(Object.fromEntries(a.values.map(Object.values)))" />
  </div>
</template>
