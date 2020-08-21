const drag = {
  namespaced: true,
  state: {
    currentDrapComponent: '',
    dragLock: false
  },
  mutations: {
    SET_DRAP_COMPONENT(state, name) {
      state.dragLock = true
      state.currentDrapComponent = name
    },
    SET_LOCK_STATUS(state, status) {
      state.dragLock = status
    }
  },
  actions: {}
}

export default drag
