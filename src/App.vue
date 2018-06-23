<template>
  <div id="wrapper">
    <router-view></router-view>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
  import loading from './components/Loading.vue'
  export default {
    components: {
      loading
    },
    computed: {
      loading () {
        return this.$store.state.loading
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
