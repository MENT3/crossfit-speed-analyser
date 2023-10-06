<script setup>
import { Line } from 'vue-chartjs'

const props = defineProps(['data'])

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

const formatedValues = {
  labels: props.data.map(v => `${v.percent} %`),
  datasets: [
    {
      label: 'Vitesse (m/s)',
      data: props.data.map(v => v.speed),
      pointRadius: 3,
      pointBorderColor: 'black',
      pointBackgroundColor: 'black',
      borderColor: 'lightgrey',
      showLine: false,
      beginAtZero: false,
      trendlineLinear: {
        lineStyle: 'solid',
        width: 2
      }
    }
  ]
}
</script>

<template>
  <div class="h-52">
    <Line :options="chartOptions" :data="formatedValues" />
  </div>
</template>
