<template>
  <div id="app">
    <PrimaryNav :title="title" :user_name="user_name"/>
    <div class="pure-g">
      <div class="pure-u-1-4">
        <Sidebar
          :previous_page_title="previous_page_title"
          :terminal_name="terminal_name"
          :country_code="country_code"
        />
      </div>
      <div class="pure-u-3-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryNav from './components/Layout/PrimaryNav.vue'
import Sidebar from './components/Layout/Sidebar.vue'

export default {
  name: 'app',
  components: { PrimaryNav, Sidebar },
  data() {
    return {
      title: "Predictive Maintenance",
      user_name: "Gabe Koss",
      previous_page_title: "Terminal Overview",
      terminal_name: "WEST",
      country_code: "NLD"

    }
  }
}
</script>

<style>
#app {}
</style>
