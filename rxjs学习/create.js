// Rx.Observable.create 是 Observable 构造函数的别名，它接收一个参数：subscribe 函数。
// Observables 可以使用 create 来创建, 但通常我们使用所谓的创建操作符, 像 of、from、interval、等等。
var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi');
  }, 1000);
});