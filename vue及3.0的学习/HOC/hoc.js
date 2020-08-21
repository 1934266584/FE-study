// 在react中高阶组件是接收一个组件作为参数，返回一个新的组件
// Vue中高阶组件是接收一个纯对象，并返回一个新的纯对象
export function WithConsole(WrappedComponent) {
  return {
    template: '<wrapped v-on="$listeners" v-bind="$attrs" />',
    components: {
      wrapped: WrappedComponent
    },
    mounted() {
      console.log('I have already mounted')
    },
  }
}
// 最好是使用渲染函数render来替代模版template

export function WithConsole1(WrappedComponent) {
  return {
    mounted() {
      console.log(1111)
    },
    props: WrappedComponent.props,
    render(h) {
      // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      return h(WrappedComponent, {
        on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props,
      }, slots) // 将 slots 作为 h 函数的第三个参数
    }
  }
}

const HoC = WrappedComponent => ({
  props: typeof WrappedComponent === 'function'
    ? WrappedComponent.options.props
    : WrappedComponent.props,
  render(h) {
    const slots = this.$slots;
    const scopedSlots = {};
    Object.keys(slots).map(key => (scopedSlots[key] = () => slots[key]));

    return h(WrappedComponent, {
      attrs: this.$attrs,
      props: this.$props,
      on: this.$listeners,
      scopedSlots,
    });
  }
})