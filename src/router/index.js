import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import routes from './router'
import store from '../store/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫，如果用户未登录就想访问其他页面，就强制跳转至登录页
router.beforeEach((to, from, next) => {
  const uInfo = store.state.user.userInfo
  if (to.path !== '/login' && !uInfo.username) {
    next('/login')
  } else {
    next()
  }

  console.log('来自', from.path)
  console.log('前往', to.path)
  console.log('store.state.user', uInfo)
})

export default router
