import Toast from '../ui-lib/toast'
import store from '@/store'
const Index = () => import('@/page/Index')
const Login = () => import('@/page/Login')
let oRoutes = {}
let arrRoutes = [
]
for (const path of arrRoutes) {
  oRoutes[path.slice(path.lastIndexOf('/') + 1)] = resolve => {
    store.dispatch('showLoading')
    import(`@/page/${path}`)
    .then(module => {
      store.dispatch('hideLoading')
      resolve(module)
    })
      .catch((err) => {
        console.log(err)
        store.dispatch('hideLoading')
        Toast('网络连接繁忙，请重试')
      })
  }
}
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      requireAuth: false
    },
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requireAuth: false
    },
    component: Login
  }
]
