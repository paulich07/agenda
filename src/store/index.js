import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todolist: []
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
