// Observable.create(function subscribe(observer) {...}) 中...的代码表示 “Observable 执行”

// Observable 执行可以传递三种类型的值:
// "Next" 通知： 发送一个值，比如数字、字符串、对象，等等。
// "Error" 通知： 发送一个 JavaScript 错误 或 异常。
// "Complete" 通知： 不再发送任何值。

// "Next" 通知是最重要，也是最常见的类型：它们表示传递给观察者的实际数据。"Error" 和 "Complete" 通知可能只会在 Observable 执行期间发生一次，并且只会执行其中的一个。

// 在 Observable 执行中, 可能会发送零个到无穷多个 "Next" 通知。如果发送的是 "Error" 或 "Complete" 通知的话，那么之后不会再发送任何通知了。
var observable = Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
})

// 在 subscribe 中用 try/catch 代码块来包裹任意代码是个不错的主意，如果捕获到异常的话，会发送 "Error" 通知：
var observable = Rx.Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (error) {
    observer.error(error);
  }
})