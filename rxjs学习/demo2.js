// Observables 像是没有参数, 但可以泛化为多个值的函数。
// Observables 是惰性运算。 如果你不调用subscribe, 就不会执行。 同时不会共享副作用并且是延迟执行。
// 订阅 Observable 类似于调用函数。
// Observables 传递值可以是同步的，也可以是异步的。
var foo = Rx.Observable.create(function (observer) {
  console.log('hello');
  observer.next(1);
});

foo.subscribe(function (x) {
  console.log(x);
})

foo.subscribe(function (x) {
  console.log(x);
})

// Observable 可以随着时间的推移“返回”多个值
// 也可以异步地“返回”值
function foo() {
  console.log('hello');
  return 42;
  return 100; //死代码，永远不会执行
}

// use Rx.js
var foo = Rx.Observable.create(function(observer) {
  console.log('hello');
  observer.next(42);
  observer.next(100); // “返回”另外一个值
  observer.next(200); // 还可以再“返回”值
});

console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');
// 同步输出
// "before"
// "Hello"
// 42
// 100
// 200
// "after"