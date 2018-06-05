<template>
  <div id="primary-nav">
    <nav>
      <img src="/wb-logo.png" />
      <a class="title">{{title}}</a>
      <span class="right">
        {{user_name}}
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-power-off"></i>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PrimaryNav',
  props: ["title", "user_name"],
}
</script>

<style scoped>
  #primary-nav {
    margin-bottom: .25em;
  }

  #primary-nav img {
    height: 3em;
    display: inline-block;
    vertical-align: middle;
  }

  #primary-nav a.title {
    display: inline-block;
    padding: 1em;
    border-left: 1px solid blue;
    color: #666;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 1em;
  }

  #primary-nav span.right {
    float: right;
    vertical-align: middle;
    padding: 1em;
  }
  #primary-nav span.right svg {
    padding-left: 1em;
    display: inline-block;
  }
</style>
