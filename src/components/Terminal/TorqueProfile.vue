<template>
  <div id="torque-profile">
    <CustomBarChart title='Open' :labels='open.labels' :datasets='open.datasets'/>
    <CustomBarChart title='Close' :labels='close.labels' :datasets='close.datasets' />
  </div>
</template>

<script>

// NOTE: this should be handled elsewhere via axios or something
import torque_data from './TorqueValues.json'

import CustomBarChart from './../Graphs/CustomBarChart.vue'

export default {
  name: 'TorqueProfile',
  components: { CustomBarChart },
  methods: {
    generateChartData(){

      // this whole thing is kind of a mess :)
      var open_average = [],
          open_last = [],
          close_average = [],
          close_last = [];

      torque_data.forEach(function(d){
        // hard coded an asset ID and made some VERY broad generalized
        // guesses about the data...
        if (d.AssetId == "577240d54d4d58401d060a5e") {
          if (d.Direction == "Open") {
            open_average[d.Position] = d.AverageTorque;
            open_last[d.Position] = d.LastTorque;
          } else if (d.Direction == "Close") {
            close_average[d.Position] = d.AverageTorque;
            close_last[d.Position] = d.LastTorque;
          }
        }
      })

      this.close.datasets = [{
        label: 'Average',
        backgroundColor: 'blue',
        data: close_average
      },
      {
        label: 'Last',
        backgroundColor: 'lightblue;',
        data: close_last
      }]

      this.open.datasets = [{
        label: 'Average',
        backgroundColor: 'blue',
        data: open_average
      },
      {
        label: 'Last',
        backgroundColor: 'lightblue;',
        data: open_last
      }]
    }
  },

  created() {
    this.generateChartData()
  },
  data(){
    return {
      open: {
        labels: [...Array(99).keys()],
        datasets: [ ]
      },
      close: {
        labels: [...Array(99).keys()],
        datasets: [ ]
      }
    }
  }
}
</script>
