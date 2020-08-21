// Observable 是多个值的惰性推送集合

// demo1
// 当订阅下面代码中的 Observable 的时候会立即(同步地)推送值1、2、3，然后1秒后会推送值4，再然后是完成流
var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
})

//要调用 Observable 并看到这些值，我们需要订阅 Observable
console.log('just before subscribe');
observable.subscribe({
  next: x => console.log('got value' + x),
  error: err => console.error('something wrong occurred:' + err),
  complete: () => console.log('done'),
});
console.log('just after subscibe');
// just before subscribe
// got value 1
// got value 2
// got value 3
// just after subscribe
// got value 4
// done