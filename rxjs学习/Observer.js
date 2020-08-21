//  什么是观察者？ - 观察者是由 Observable 发送的值的消费者。观察者只是一组回调函数的集合，每个回调函数对应一种 Observable 发送的通知类型：next、error 和 complete

// 典型的观察者对象:
var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
}

// 观察者只是有三个回调函数的对象，每个回调函数对应一种 Observable 发送的通知类型。
observable.subscribe(observer);