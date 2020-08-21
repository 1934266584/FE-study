/*
 * @Author: Yu lin Liu
 * @Date: 2019-08-22 09:21:27
 * @Description: file content
 */
const getters = {
  currentEditComponent: state => state.componentEdit.currentEditComponent,
  currentDrapComponent: state => state.drag.currentDrapComponent,
  dragLock: state => state.drag.dragLock
}

export default getters
