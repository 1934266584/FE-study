Vuex是专门为Vue应用程序提供的状态管理模式，每个Vuex应用的核心是store（仓库），即装载应用程序state（状态）的容器，每个应用通常只拥有一个store实例。

Vuex执行流程

Vuex的state是响应式的，即store中的state发生变化时，相应组件也会进行更新，修改store当中state的唯一途径是提交mutations。

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit("increment")       // 通过store.state来获取状态对象
console.log(store.state.count)  // 通过store.commit()改变状态
```

State

从store当中获取state的最简单办法是在计算属性中返回指定的state，每当state发生改变的时候都会重新执行计算属性，并且更新关联的DOM。

```
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```

Vuex提供store选项，将state从根组件注入到每个子组件中，从而避免频繁import store

```
// 父组件中注册store属性
const app = new Vue({
  el: "#app",
  store: store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>`
})
// 子组件，store会注入到子组件，子组件可通过this.$store进行访问
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```

Vuex提供mapState()辅助函数，避免使用多个state的场景下，多次去声明计算属性。

```
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex"
export default {
  computed: mapState({
    count: state => state.count,
    // 传递字符串参数"count"等同于`state => state.count`
    countAlias: "count",
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
// 当计算属性名称与state子节点名称相同时，可以向mapState传递一个字符串数组
computed: mapState([
  "count" // 映射this.count到store.state.count
])
```

mapState()函数返回一个包含有state相关计算属性的对象，这里可以通过ES6的对象展开运算符...将该对象与Vue组件本身的computed属性进行合并。

```
computed: {
  localComputed () {},
  ...mapState({})
}
```

Vuex允许在store中定义getters（可视为store的计算属性），getters的返回值会根据其依赖被缓存，只有当依赖值发生了改变才会被重新计算。该方法接收state作为第1个参数，其它getters作为第2个参数。可以直接在store上调用getters来获取指定的计算值。

```
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  getters: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
// 获取doneTodos = [{ id: 1, text: "...", done: true }]
store.getters.doneTodos
```

这样就可以方便的根据store中现有的state派生出新的state，从而避免在多个组件中复用时造成代码冗余。

```
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodos // 现在可以方便的在Vue组件使用store中定义的doneTodos
  }
}
```

Vuex提供的mapGetters()辅助函数将store中的getters映射到局部计算属性。

```
import { mapGetters } from "vuex"
export default {
  computed: {
    // 使用对象展开运算符将getters混入computed计算属性
    ...mapGetters([
      "doneTodosCount",
      doneCount: "doneTodosCount" // 映射store.getters.doneTodosCount到别名this.doneCount
    ])
  }
}
```

Mutations

修改store中的state的唯一方法是提交mutation，mutations类似于自定义事件，拥有一个字符串事件类型和一个回调函数（接收state作为参数，是对state进行修改的位置）。

```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    // 触发类型为increment的mutation时被调用
    increment (state) {
      state.count++ // 变更状态
    }
  }
})
// 触发mutation
store.commit("increment")
```

可以通过store的commit()方法触发指定的mutations，也可以通过store.commit()向mutation传递参数。

```
// commit()
store.commit({
  type: "increment",
  amount: 10
})
// store
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

mutation事件类型建议使用常量，并且将这些常量放置在单独文件，便于管理和防止重复。

```
// mutation-types.js
export const SOME_MUTATION = "SOME_MUTATION"
// store.js
import Vuex from "vuex"
import { SOME_MUTATION } from "./mutation-types"
const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 可以通过ES6的计算属性命名特性去使用常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})

mutation()必须是同步函数，因为devtool无法追踪回调函数中对state进行的异步修改。
```

Vue组件可以使用this.$store.commit("xxx")提交mutation，或者使用mapMutations()将Vue组件中的methods映射为store.commit调用（需要在根节点注入store）。

```
import { mapMutations } from "vuex"
export default {
  methods: {
    ...mapMutations([
      "increment" // 映射this.increment()为this.$store.commit("increment")
    ]),
    ...mapMutations({
      add: "increment" // 映射this.add()为this.$store.commit("increment")
    })
  }
}
```

Actions

Action用来提交mutation，且Action中可以包含异步操作。Action函数接受一个与store实例具有相同方法和属性的context对象，因此可以通过调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state、getters。

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit("increment")
    }
  }
})
生产环境下，可以通过ES6的解构参数来简化代码
actions: {
  // 直接向action传递commit方法
  increment ({ commit }) {
    commit("increment")
  }
}
```

Action通过store.dispatch()方法进行分发，mutation当中只能进行同步操作，而action内部可以进行异步的操作。下面是一个购物车的例子，代码中分发了多个mutations，并进行了异步API操作。

```
actions: {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.cart.added]  // 把当前购物车的物品备份起来
    commit(types.CHECKOUT_REQUEST)                // 发出结账请求，然后清空购物车
    // 购物Promise分别接收成功和失败的回调
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),                  // 成功操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)   // 失败操作
    )
  }
}
组件中可以使用this.$store.dispatch("xxx")分发action，或者使用mapActions()将组件的methods映射为store.dispatch（需要在根节点注入store）。

import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions([
      "increment"       // 映射this.increment()为this.$store.dispatch("increment")
    ]),
    ...mapActions({
      add: "increment"  // 映射this.add()为this.$store.dispatch("increment")
    })
  }
}

store.dispatch可以处理action回调函数当中返回的Promise，并且store.dispatch本身仍然返回一个Promise。

actions: {
  // 定义一个返回Promise对象的actionA
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("someMutation") // 触发mutation
        resolve()
      }, 1000)
    })
  },
  // 也可以在actionB中分发actionA
  actionB ({ dispatch, commit }) {
    return dispatch("actionA").then(() => {
      commit("someOtherMutation") // 触发另外一个mutation
    })
  }
}
// 现在可以分发actionA
store.dispatch("actionA").then(() => {
  ... ... ...
})

可以体验通过ES7的异步处理特性async/await来组合action。
actions: {
  async actionA ({ commit }) {
    commit("gotData", await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch("actionA") //等待actionA完成
    commit("gotOtherData", await getOtherData())
  }
}

```

Module

整个应用使用单一状态树的情况下，所有state都会集中到一个store对象，因此store可能变得非常臃肿。因此，Vuex允许将store切割成模块（module），每个模块拥有自己的state、mutation、action、getter、甚至是嵌套的子模块。

```
const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
const moduleB = {
  state: {},
  mutations: {},
  actions: {}
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
store.state.a // moduleA的状态
store.state.b // moduleB的状态
```

module内部的mutations()和getters()接收的第1个参数是模块的局部状态对象。

```
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      state.count++ // 这里的state是模块的局部状态
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```

模块内部action当中，可以通过context.state获取局部状态，以及context.rootState获取全局状态。

```
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit("increment")
      }
    }
  }
}
```

模块内部的getters()方法，可以通过其第3个参数接收到全局状态。

```
const moduleA = {
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

```