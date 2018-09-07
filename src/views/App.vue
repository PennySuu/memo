<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style src="@/assets/css/reset" lang="stylus"></style>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  color: #323061;
}
#app {
  height: 100%;
}
</style>
