<script setup lang="ts">
import { Database } from '@/types/database.types'
import { linearRegression } from '@/lib/regression'

const user = await useSupabaseUser()
const client = useSupabaseClient<Database>()

const { data: analysis } = await useAsyncData('analysis', async () => {
  const { data } = await client.from('analysis').select('*, values(id, percent, speed), movements(id, key, name)').eq('user_id', user.value!.id)
  return data
})

const selectedTab = ref(0)
const regressionsValues = computed(() => analysis.value!.map(v => {
  const x = v.values.map(vv => vv.percent)
  const y = v.values.map(vv => vv.speed)
  return linearRegression(x, y)
}))

const tabsItems = [{
  slot: 'chart',
  label: 'Calculateurs',
  icon: 'i-heroicons-chart-bar'
}, {
  slot: 'data',
  label: 'Les données',
  icon: 'i-heroicons-pencil-square'
}]
</script>

<template>
  <UTabs
    v-model="selectedTab"
    :items="tabsItems"
    class="w-full mb-4"
  >
    <template #default="{ item, selected }">
      <div class="flex items-center gap-2 relative truncate">
        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
        <span class="truncate">{{ item.label }}</span>
        <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
      </div>
    </template>

    <template #chart="{ item }">
      <div class="flex flex-col space-y-4">
        <Card
          v-for="(a, i) in analysis"
          :key="a.id"
          :title="a.movements?.name"
          :r2="regressionsValues[i].r2"
          description="Analyse de vitesse"
        >
          <Chart :data="a.values" />

          <template #footer>
            <Calculator :slope="regressionsValues[i].slope" :intercept="regressionsValues[i].intercept" />
          </template>
        </Card>
      </div>
    </template>

    <template #data="{ item }">
      <div class="flex flex-col space-y-4">
        <Card
          v-for="(a, i) in analysis"
          :key="a.id"
          :title="a.movements?.name"
          :r2="regressionsValues[i].r2"
          description="Analyse de vitesse"
        >
          <Form v-model="a.values" :analysis-id="a.id" @on-change="selectedTab=0" />
        </Card>
      </div>
    </template>
  </UTabs>
</template>
