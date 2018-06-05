<template>
  <div class="custom-bar-chart">
    <h3>{{title}}</h3>
    <bar-chart :labels='labels' :datasets='datasets'/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('bar-chart',  {
  extends: VueChartJs.Bar,
  mixins: [VueChartJs.mixins.reactiveProp],
  props: [
    'labels',
    'datasets'
  ],
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {
      responsive: true,
      maintainAspectRatio: false,
      height: '400px',
      scales: {
            xAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value) {
                        return ((value % 10 === 0)? value : null)
                    }
                }
            }]
        }
    })
  }
})

export default {
  name: "CustomBarChart",
  props: [
    'title',
    'datasets',
    'labels'
  ]
}
</script>

<style scoped>
  .custom-bar-chart {
    padding-left: 1em;
  }
</style>
