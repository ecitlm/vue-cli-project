<template>
  <div class="loading">
    <div class="loading-inner">
        <svg class="loading-inner-circle" width="32" height="32" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g transform="translate(1 1)" stroke-width="2" fill="none">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="365 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
            </path>
          </g>
        </svg>
    </div>
    <div class="loading-mask"></div>
  </div>
</template>

<style scoped lang="scss">
  @import "../assets/css/tools.scss";

  .loading {
    &-mask {
      position: fixed;
      z-index: 9998;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }

    &-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: -25px;
      margin-top: -25px;
      width: 50px;
      height: 50px;
      background: rgba(50, 50, 50, 0.5);
      border-radius: px2rem(6px);
      z-index: 9999;
    }
  }
</style>
