<template>
  <div class="login">
    <h3>{{msg}}</h3>
    <h1 @click="toLogin">Login</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: 'welcome to vue-cli'
      }
    },
    computed: {
    },
    methods: {
      // 进入应用
      getEnterApp () {
        console.log('index')
      },
      toLogin () {
        this.$router.push('login')
      }
    },
    created () {
      this.getEnterApp()
    }
  }
</script>
