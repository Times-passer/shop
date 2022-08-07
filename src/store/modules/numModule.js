// 注意这里直接export default一个对象，不需要createStore({})
export default {
  namespaced: true, // 防止不同模块命名重复
  state: {
    num: 8,
  },
  getters: {
    countStatus(state) {
      return state.num >= 10
    },
  },
  mutations: {
    increment(state, n) {
      state.num += n
    },
  },
  actions: {
    countPromise(context, num) {
      return new Promise((resolve, reject) => {
        if (num > 10) {
          reject('num已大于10')
        } else {
          context.commit('increment', 1)
          resolve('+1成功')
        }
      })
    },
  },
  modules: {},
}
