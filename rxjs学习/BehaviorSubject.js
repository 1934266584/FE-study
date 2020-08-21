// BehaviorSubject 有一个 “当前值” 的概念，它保存了发送给消费者的最新值，并且当有新的观察者订阅时，会立即从BehaviorSubject那接收到 “当前值”

//BehaviorSubjects 适合用来表示“随时间推移的值” 
// demo 1
var subject = new Rx.BehaviorSubject(0); // 0是初始值

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
})

subject.next(3);