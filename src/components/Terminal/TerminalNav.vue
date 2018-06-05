<template>
  <nav id="terminal-nav">
    <a>Dashboard</a>
    <a class="active">Asset Health</a>
    <a>Work Orders</a>
  </nav>
</template>

<script>
export default {
  name: 'TerminalNav'
}
</script>

<style scoped>
#terminal-nav {
  border-bottom: 1px solid #ccc;
}
#terminal-nav a {
  display:inline-block;
  padding: .5em 1em;
  font-weight: bold;
}

#terminal-nav a.active {
  border-bottom: 4px solid #4A90E2;
  color: #4A90E2;
}
#terminal-nav a:hover {
  border-bottom: 4px solid #4A90E2;
  color: white;
  background-color: #ccc;
  cursor: pointer;
}
</style>
