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
#wrapper {
  margin: 0 auto;
  max-width: 750PX;
}
</style>
