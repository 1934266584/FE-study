// 什么是 Subject？ - RxJS Subject 是一种特殊类型的 Observable，它允许将值多播给多个观察者，所以 Subject 是多播的，而普通的 Observables 是单播的(每个已订阅的观察者都拥有 Observable 的独立执行)。

// demo1
var subject = new Rx.Subject(); // 创建subject实例

subject.subscribe({
  next: x => console.log("observerA: " + x)
});

subject.subscribe({
  next: x => console.log("observerB: " + x)
});

subject.next(1);
subject.next(2);

// 控制台的输出
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

// demo2
var subject = new Rx.Subject();

subject.subscribe({
  next: x => console.log("observerA: " + x)
});

subject.subscribe({
  next: x => console.log("observerB: " + x)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject); // 你可以提供一个 Subject 进行订阅
// observerA: 1
// observerB: 1;
// observerA: 2;
// observerB: 2;
// observerA: 3;
// observerB: 3;

// 多播的 Observables
// 多播 Observable 在底层是通过使用 Subject 使得多个观察者可以看见同一个 Observable 执行
// demo3
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
// multicast 操作符的工作原理：观察者订阅一个基础的 Subject，然后 Subject 订阅源 Observable 。
var multicasted = source.multicast(subject);

// 在底层使用了 subject.subscribe({...})
multicasted.subscribe({
  next: x => console.log("observerA: " + x)
});

multicasted.subscribe({
  next: x => console.log("observerB: " + x)
});

// 类似source.subscribe(subject)
multicasted.connect();

// 手动调用 connect() 并处理 Subscription 通常太笨重。通常，当第一个观察者到达时我们想要自动地连接，而当最后一个观察者取消订阅时我们想要自动地取消共享执行。
var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);
var subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
  next: x => console.log("ObserverA: " + x)
});

// 这里我们应该调用 `connect()`，因为 `multicasted` 的第一个
// 订阅者关心消费值
subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next: x => console.log("ObserverB: " + x)
  });
}, 600);

setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

// 这里我们应该取消共享的 Observable 执行的订阅，
// 因为此后 `multicasted` 将不再有订阅者
setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe(); // 用于共享的 Observable 执行
}, 2000);

// 利用refCount来进行引用记数
// refCount() 只存在于 ConnectableObservable，它返回的是 Observable，而不是另一个 ConnectableObservable 。
var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var refCounted = source.multicast(subject).refCount();
var subscription1, subscription2, subscriptionConnect;

// 这里其实调用了 `connect()`，
// 因为 `refCounted` 有了第一个订阅者
console.log("observerA subscribed");
subscription1 = refCounted.subscribe({
  next: v => console.log("observerA: " + v)
});

setTimeout(() => {
  console.log("observerB subscribed");
  subscription2 = refCounted.subscribe({
    next: v => console.log("observerB: " + v)
  });
}, 600);

setTimeout(() => {
  console.log("observerA unsubscribed");
  subscription1.unsubscribe();
}, 1200);

// 这里共享的 Observable 执行会停止，
// 因为此后 `refCounted` 将不再有订阅者
setTimeout(() => {
  console.log("observerB unsubscribed");
  subscription2.unsubscribe();
}, 2000);
