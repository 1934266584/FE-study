<template>
  <div>
    <button v-stream:click="plus$">+</button>
    <button v-stream:click="{ subject: plus$, data: someData }">+</button>
    <button v-stream:click="{
      subject: plus$,
      data: someData,
      options: { once: true, passive: true, capture: true }
    }">+</button>
  </div>
</template>

<script>
import { Subject } from 'rxjs';
import { map, startWith, scan } from 'rxjs/operators';
export default new Vue({
  subscriptions() {
    // 声明接收的 Subjects
    this.plus$ = new Subject();
    // ...然后使用 Subjects 作为来源流创建订阅。
    // 来源流以 `{ event: HTMLEvent, data?: any }` 的格式发送数据
    return {
      count: this.plus$.pipe(
        map(() => 1),
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  }
})

new Vue({
  // 需要传递 `Rx` 给 `Vue.use()` 暴露 `Subject`
  domStreams: ['plus$'],
  subscriptions() {
    // 使用 `this.plus$`
  }
});
</script>
