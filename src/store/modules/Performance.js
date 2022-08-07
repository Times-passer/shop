// 注意这里直接export default一个对象，不需要createStore({})
export default {
  namespaced: true, // 防止不同模块命名重复
  state: {
    firstPaint: null,
    firstContentfulPaint: null,
    domReady: null,
    dnsTime: null,
  },
  getters: {},
  mutations: {
    changeFP(state, n) {
      state.firstPaint = n
    },
    changeFCP(state, n) {
      state.firstContentfulPaint = n
    },
    changeDOM(state, entry) {
      state.domReady = entry.domContentLoadedEventEnd - entry.fetchStart
    },
    changeDNS(state, entry) {
      state.dnsTime = entry.domainLookupEnd - entry.domainLookupStart
    },
  },
  actions: {},
  modules: {},
}
