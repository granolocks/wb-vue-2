<template>
  <div id="terminal-asset-nav">
    <div class="asset-title">
      Asset overview <i class="fas fa-arrow-right"></i> <span class='circle'></span> {{asset_name}}
    </div>
    <nav >
      <a>events</a>
      <a>position</a>
      <a>travel time</a>
      <a class="active">torque profile</a>
      <a>work orders</a>
      <a>alarm analytics</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TerminalAssetNav',
  props: ["asset_name"]
}
</script>

<style scoped>
#terminal-asset-nav .asset-title {
  color: white;
  background-color: #4A90E2;
  font-size: 1.2em;
  padding: .75em;
}

#terminal-asset-nav nav {
  border-bottom: 1px solid #ccc;
  text-transform: uppercase;
  color: #666;
}
#terminal-asset-nav nav a {
  display:inline-block;
  padding: 1em 1.25em;
  font-weight: bold;
}

#terminal-asset-nav nav a.active {
  border-bottom: 4px solid #4A90E2;
  color: #4A90E2;
}
#terminal-asset-nav nav a:hover {
  border-bottom: 4px solid #4A90E2;
  color: white;
  background-color: #ccc;
  cursor: pointer;
}
.circle {
    display: inline-block;
    background-color: red;
    border: 3px solid white;
    height: .75em;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width: .75em;
    vertical-align: middle;
    margin: 0 .5em;
}
</style>
