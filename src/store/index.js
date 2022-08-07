import { createStore } from 'vuex'
import number from './modules/numModule.js'
import user from './modules/userModule.js'
import perf from './modules/Performance.js'

export default createStore({
  modules: {
    number,
    user,
    perf,
  },
})
