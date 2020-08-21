## 可以把 RxJS 当做是用来处理事件的 Lodash 。
RX像是操作随着时间发出的离散数值的工具函数。Observable 就像是一個序列，裡面的元素會隨著時間推送

### ReactiveX 结合了 观察者模式、迭代器模式 和 使用集合的函数式编程，以满足以一种理想方式来管理事件序列所需要的一切

+ Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合
+ Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
+ Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
+ Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合
+ Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
+ Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

## Observable 剖析
+ 创建 create
+ 订阅 subscrible
+ 执行 next*(error|complete)?
+ 清理 unsubscribe

## Observer 观察者

## Subscription 订阅

## Subject 主体

## Operators 操作符
操作符是允许复杂的异步代码以声明式的方式进行轻松组合的基础代码单元
操作符是 Observable 类型上的方法，当操作符被调用时，它们不会改变已经存在的 Observable 实例。相反，它们返回一个新的 Observable ，它的 subscription 逻辑基于第一个 Observable 。

### 操作符分类
+ 创建操作符
+ 转换操作符
+ 过滤操作符
+ 组合操作符
+ 多播操作符
+ 错误处理操作符
+ 工具操作符
+ 条件和布尔操作符
+ 数学和聚合操作符

## Scheduler 调度器
调度器控制着何时启动 subscription 和何时发送通知。它由三部分组成：
+ 调度器是一种数据结构。 它知道如何根据优先级或其他标准来存储任务和将任务进行排序
+ 调度器是执行上下文。 它表示在何时何地执行任务(举例来说，立即的，或另一种回调函数机制(比如 setTimeout 或 process.nextTick)，或动画帧)。
+ 调度器有一个(虚拟的)时钟。 调度器功能通过它的 getter 方法 now() 提供了“时间”的概念。在具体调度器上安排的任务将严格遵循该时钟所表示的时间。