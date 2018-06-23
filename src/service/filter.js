import Vue from 'vue'

Vue.filter('mixphone', num => {
  return num.replace(/(\d{3})\d{4}(\d{4})/, `$1****$2`)
})
