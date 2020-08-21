import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import drag from './modules/drag'
import componentEdit from './modules/componentEdit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    drag,
    componentEdit
  },
  getters
})

export default store
