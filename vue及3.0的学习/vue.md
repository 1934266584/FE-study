化繁为简的Watchers

```
created(){    
  this.fetchPostList()
},
watch: {
  searchInputValue(){        
    this.fetchPostList()
  }
}

// 优化方式
// 该回调将会在侦听开始之后被立即调用
watch: {    
  searchInputValue:{        
    handler: 'fetchPostList',        
    immediate: true
  }
}

$attrs 传递父元素的所有属性，但是不能在props中申明。同时可以用过v-bind="$attrs"传入内部组件当中

$listeners 包含父作用域中的(不含 .native 修饰器的) v-on事件监听器。同时可以通过v-on="$listeners"传入内部组件

.sync 修饰符 类似v-model的语法糖
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
/>
等价于
<text-document v-bind:title.sync="doc.title" />

computed计算属性中的get和set
computed: {
  fullName: {
    // getter 根据依赖来重新组合
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter 设置属性的时候也同时改变依赖的值
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}

:hook 钩子
mounted: function () {
  var picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })

  this.$once('hook:beforeDestroy', function () {
    picker.destroy()
  })
}

函数式组件
优势：渲染开销也低很多，程序化地在多个组件中选择一个，在将 children, props, data 传递给子组件之前操作它们。
劣势：无状态 (没有响应式数据)，无实例 (没有 this 上下文)。不会出现在 Vue devtools 的组件树里。

var EmptyList = { /* ... */ }
var TableList = { /* ... */ }
var OrderedList = { /* ... */ }
var UnorderedList = { /* ... */ }

Vue.component('smart-list', {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render: function(createElement, context) {
    function appropriateListComponent () {
      var items = context.props.items
      if (items.length === 0) return EmptyList
      if (type items[0] === 'object') return TableList
      if (context.props.isOrdered) return OrderedList

      return UnorderdList
    }

    return createElement(
      appropriateListComponent(),
      context.data,
      context.children
    )
  }
})

