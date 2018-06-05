<template>
  <div id="sidebar">
    <div class="context">
      <i class="fas fa-arrow-left"></i>
      <span>{{previous_page_title}}</span>
      <span class="menu-icon">
        <i class="fas fa-bars"></i>
      </span>
    </div>
    <img src='/ship-pic.png' />
    <div class="details">
      <!-- make this a named router-view -->
      <h3><small>Terminal Name</small>{{terminal_name}}</h3>
      <h3><small>Country Code</small>{{country_code}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: [
    "previous_page_title",
    "terminal_name",
    "country_code"
  ]
}
</script>

<style>
#sidebar .context {
  background-color: #4A90E2;
  color: white;
  padding: .75em .5em .5em 1em;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
}
#sidebar .context svg {
  padding-right: .5em;
}
#sidebar .context .menu-icon {
 display: block;
 float:right;
}

#sidebar img {
  width: 100%;
}

#sidebar .details {
  padding-left: 1em;
}

#sidebar .details h3 small {
  display: block;
  font-weight: normal;
}
</style>
