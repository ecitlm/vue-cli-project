<template>
  <div class="login">
    <h3>{{msg}}</h3>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: 'Login'
      }
    },
    computed: {
    },
    methods: {
      // 进入应用
      getEnterApp () {
      }
    },
    created () {
      this.getEnterApp()
    }
  }
</script>
