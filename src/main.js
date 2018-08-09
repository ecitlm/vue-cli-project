import 'es6-promise/auto'
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'
// filter过滤器
import '@/filter/filter'
import '@/directive/directive'
// window公用方法
import '@/assets/js/window-common.js'
// vue公用方法
import '@/assets/js/vue-prototype.js'
import Toast from './ui-lib/toast'
// 公共css文件
import './assets/css/common.scss'
import api from './service/http'
Vue.prototype.$api = api
Vue.prototype.$toast = Toast
Vue.config.productionTip = false

// 非正式环境添加vconsole调试
if (process.env.NODE_ENV === 'development') {
  let VConsole = require('vconsole')
  let vConsole = new VConsole()
  console.log(`vconsole version: ${vConsole.version}`)
}

// 测试环境下启用mockjs
if (process.env.NODE_ENV === 'development') {
  // require('../mock/index')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
