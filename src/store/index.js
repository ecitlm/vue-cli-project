import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import realNameManage from './modules/realNameManage'
import storage from '../assets/js/base/storage'

Vue.use(Vuex)
const state = {
  loading: false,
  loadingSum: 0,
  token: storage.get('token')
}

export default new Vuex.Store({
  modules: {
    realNameManage
  },
  state,
  mutations,
  actions
})
