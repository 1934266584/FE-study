const componentEdit = {
  namespaced: true,
  state: {
    currentEditComponent: {}
  },
  mutations: {
    SET_EDIT_COMPONENT(state, component) {
      state.currentEditComponent = component
    }
  }
}

export default componentEdit
