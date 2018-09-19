<template>
  <div class="login">
    <h3>{{msg}}</h3>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: 'this is a Login page'
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

<style scoped>
  h3{
    font-size: 60px;
    text-align: center;
    padding: 100px 0;
  }
</style>