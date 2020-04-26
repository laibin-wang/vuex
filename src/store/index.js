import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建Vuex实例
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: { // 类似computed
    getStateCount: (state) => {
      return state.count + 1
    },
    getOtherGetters: (state, getters) => {
      return getters.getStateCount
    },
    getByNumber: (state) => (num) => {
      return num
    },
    mapGettersCount: (state) => {
      return state.count + 1
    }
  },
  mutations: {
    add (state) {
      state.count += 1
    },
    reduce (state) {
      state.count -= 1
    },
    addNum (state, num) {
      state.count += num
    },
    reduceNum (state, num) {
      state.count -= num
    }
  },
  actions: { // 类似methods
    addAction (context) { // 接收与store实例有相同方法和属性的context对象
      context.commit('add')
    },
    reduceAction (context) {
      context.commit('reduce')
    },
    addActionNum (context, num) {
      context.commit('addNum', num)
    },
    reduceActionNum (context, num) {
      context.commit('reduceNum', num)
    },
    addActionAsync ({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})

export default store
