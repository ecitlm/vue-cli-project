<template>
  <transition name="sswl-toast-pop">
    <div class="sswl-toast" v-show="visible">
      <div class="sswl-toast-text">{{ message }}</div>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    props: {
      message: String
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .sswl-toast {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    transition: opacity .3s linear;

    &-text {
      padding: 8px 16px!important;
      width: auto;
      max-width: 270px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      z-index: 9999 !important;
      word-break: break-all;
      border-radius: 5px;
      text-align: center;
    }
  }

  .sswl-toast-pop-enter,
  .sswl-toast-pop-leave-active {
    opacity: 0
  }
</style>
