// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad);

// 监听路由变化
window.addEventListener('hashchange', onHashChange);

// 路由视图
var routerView = null

function onLoad() {
  routerView = document.querySelector('#app');
  onHashChange()
}

// 路由变化的时候，根据路由渲染对应UI
function onHashChange() {
  switch (location.hash) {
    case '#/home':
      routerView.innerHTML = 'Home';
      break;
    case '#/about':
      routerView.innerHTML = 'About'
      return
    default:
      break;
  }
}