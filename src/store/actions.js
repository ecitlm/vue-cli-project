import * as types from './mutation-types'

export default {
  showLoading ({
    commit
  }) {
    commit(types.SHOW_LOADING)
  },
  hideLoading ({
    commit
  }) {
    setTimeout(() => {
      commit(types.HIDE_LOADING)
    }, 50)
  },
  saveToken ({
    commit
  }, token) {
    commit(types.SAVE_TOKEN, token)
  }
}
