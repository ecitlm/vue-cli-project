<template>
  <div class="login">
    <h3>{{msg}}</h3>
    <button @click="toLogin">Login</button>
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

<style scoped lang="scss">
  .login {
    width: 750px;
    height: 100px;
    border-bottom: 1px solid #000000;
    background: #f45;
    h3 {
      color: #fff;
      font-size: 32px;
    }
    button {
      position: relative;
      font-size: 28px;
      line-height: 40px;
      appearance: none;
    }
  }
</style>
