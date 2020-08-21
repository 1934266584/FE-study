/* eslint-disable */
// 生成随机组件id
function wrap() {
  let id = 0;
  return function random_component(componentName) {
    const currentTime = Date.now()
    id++
    return `${componentName}-${currentTime}-${id}`
  }
}

const componentUUID = wrap()

export { componentUUID }
