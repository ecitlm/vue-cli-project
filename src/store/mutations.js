import * as types from '@/store/mutation-types'
import storage from '@/assets/js/base/storage'

export default {
  [types.SHOW_LOADING] (state) {
    state['loadingSum']++
    state['loading'] = true
    document.addEventListener('touchmove', window.forbidScroll, false)
    console.log(state['loadingSum'])
  },
  [types.HIDE_LOADING] (state) {
    if (--state['loadingSum'] <= 0) {
      state['loading'] = false
      state['loadingSum'] = 0
      document.removeEventListener('touchmove', window.forbidScroll, false)
    }
    console.log(state['loadingSum'])
  },
  [types.SAVE_TOKEN] (state, token) {
    storage.set('token', token)
    state['token'] = token
  }
}
