<template>
  <div id="terminal-asset">
    <TerminalAssetNav :asset_name="asset_name"/>
    <router-view></router-view>
  </div>
</template>

<script>
import TerminalAssetNav from './TerminalAssetNav'

export default {
  name: 'TerminalAsset',
  components: { TerminalAssetNav },
  data() {
    return {
      asset_name: "Master station 1-1"
    }
  }
}
</script>
<style>
#terminal-asset {
  background-color: white;
  border: 1px solid #ccc;
}
</style>
