// 注意这里直接export default一个对象，不需要createStore({})
export default {
  namespaced: true, // 防止不同模块命名重复
  state: {
    userInfo: JSON.parse(localStorage.getItem('loginData')) || {},
  },
  getters: {},
  mutations: {
    setUser(state, n) {
      state.userInfo = n
    },
  },
  actions: {},
  modules: {},
}
