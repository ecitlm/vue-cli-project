import axios from 'axios'
import store from '../store'
import router from '../router/index'
import Toast from '../ui-lib/toast'

let instance = axios.create({
  timeout: 60 * 1000,
  baseURL: process.env.BACK_BASE_URL
})

// 一些拦截器配置，用户token鉴权，发送请求显示loading,请求回来loading消失之类的
instance.interceptors.request.use(config => { // 配置发送请求的信息
  store.dispatch('showLoading')
  config.headers.authorization = `${store.state.token}`
  return config
}, error => {
  console.log('请求出错了...', error)
  return Promise.reject(error)
})
// response拦截
instance.interceptors.response.use(response => {
  store.dispatch('hideLoading')
  if (response.data.code === 200) {
    return response.data
  } else {
    console.log(response)
    let err = new Error()
    err.response = response
    return Promise.reject(err)
  }
}, error => {
  console.log('%c 响应报错----------------:', 'color:red', error.response)
  store.dispatch('hideLoading')
  return Promise.reject(error)
})

const httpRequest = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 200) {
            reject(error.response.data)
          } else if (error.response.status === 403) {
            router.replace({
              path: '/login'
            })
          } else {
            router.replace({
              path: '/error'
            })
          }
        } else {
          Toast('请求无响应')
        }
      })
  })
}

export default {
  // 检查用户状态
  login (data = {}) {
    return httpRequest('/api/login', ...arguments)
  }
}
