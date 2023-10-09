<script setup>
import { Line } from 'vue-chartjs'

const props = defineProps(['data'])

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
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
  <Line :options="chartOptions" :data="formatedValues" />
</template>
