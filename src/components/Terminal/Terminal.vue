<template>
  <div id="terminal">
    <TerminalNav />
    <div class="terminal-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TerminalNav from './TerminalNav.vue';

export default {
  name: 'Terminal',
  components: {TerminalNav}
}
</script>

<style scoped>
  #terminal .terminal-wrapper {
    background-color: #F7F7F9;
    padding: 1em;
  }
</style>
