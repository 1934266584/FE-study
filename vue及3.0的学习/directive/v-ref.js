// 像react一样来获取实例 用法 v-ref="(ref, key) => {}"

const vRef = {
  install(Vue) {
    const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    const directiveName = options.name || 'ref'
    Vue.directive(directiveName, {
      bind(el, binding, vnode) {
        // 指令的绑定值
        binding.value(vnode.componentInstance || el, vnode.key)
      },
      update(el, binding, vnode, oldVnode) {
        if (oldVnode.data && oldVnode.data.directives) {
          const oldBinding = oldVnode.data.directives.find(function(directive) {
            const name = directive.name
            return name === directiveName
          })
          if (oldBinding && oldBinding.value !== binding.value) {
            oldBinding && oldBinding.value(null, oldVnode.key)
            binding.value(vnode.componentInstance || el, vnode.key)
            return
          }
        }
        if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
          binding.value(vnode.componentInstance || el, vnode.key)
        }
      },
      unbind(el, binding, vnode) {
        binding.value(null, vnode.key)
      }
    })
  }
}