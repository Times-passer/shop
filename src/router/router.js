import layOut from '../components/layOut/layOut.vue'
const routes = [
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/layOut/loginPage.vue'),
  },
  {
    path: '/',
    name: 'layOut',
    component: layOut,
    redirect: '/users',
    children: [
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/pages/rolesList.vue'),
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../components/pages/usersList.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting 路由级代码拆分
    // this generates a separate chunk (about.[hash].js) for this route 这会为此路由生成一个单独的块 (about.[hash].js)
    // which is lazy-loaded when the route is visited. 访问路由时延迟加载
    // 这就是路由懒加载，用户不访问这个路由就不加载，节省初始化加载时间
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

export default routes
