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
    padding:0 32px;
    height: 100px;
    h3 {
      color: #333;
      font-size: 60px;
      padding:100px 0;
      text-align:center;
    }
    button {
      background-image: linear-gradient(-90deg, #ff6a3e 0%, #ff8f4d 100%);
      box-shadow: 0 2px 4px 0 rgba(255, 106, 62, 0.5);
      border-radius: 4px;
      width: 100%;
      height: 88px;
      border: 0;
      outline: 0;
      color: #fff;
      margin: 100px 0;
      font-size: 32px;
    }
    button:active {
      background: #999;
      box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.5);
      border: 0;
      outline: 0;
    }
  }
</style>
