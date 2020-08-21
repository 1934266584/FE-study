//  Observable 执行可能会是无限的，并且观察者通常希望能在有限的时间内中止执行，所以我们需要一个 API 来取消执行

// 当调用了 observable.subscribe ，观察者会被附加到新创建的 Observable 执行中。这个调用还返回一个对象，即 Subscription (订阅)

var observable = Rx.Observable.from([10, 20, 30]);
var subscription = observable.subscribe(x => console.log(x));
// 稍后：
subscription.unsubscribe();

// 使用 create() 方法创建 Observable 时，Observable 必须定义如何清理执行的资源。你可以通过在 function subscribe() 中返回一个自定义的 unsubscribe 函数。

// demo 如何清理使用了setInterval的interval执行集合
var observable = Rx.Observable.create(function subscribe(observer) {
  // 追踪 interval 资源
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  // 提供取消和清理 interval 资源的方法
  return function unsubscribe() {
    clearInterval(intervalID)
  }
})

// 正如 observable.subscribe 类似于 Observable.create(function subscribe() {...})，从 subscribe 返回的 unsubscribe 在概念上也等同于 subscription.unsubscribe
