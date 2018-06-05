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

      // this whole function needs to be delegated elsewhere..
      
      let open_data = [],
          close_data = [];

      torque_data.forEach(function(d){
        if (d.Direction == "Open") {
          if (d.AssetId == "577240d54d4d58401d060a5e") {
            open_data.push(d)
          }
        } else if (d.Direction == "Close") {
          if (d.AssetId == "577240d54d4d58401d060a5e") {
            close_data.push(d);
          }
        }
      })

      var open_average = [],
          open_last = [],
          close_average = [],
          close_last = [];

      open_data.forEach(function(x) {
        open_average[x.Position] = x.AverageTorque;
        open_last[x.Position] = x.LastTorque;
      })
      close_data.forEach(function(x) {
        close_average[x.Position] = x.AverageTorque;
        close_last[x.Position] = x.LastTorque;
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
