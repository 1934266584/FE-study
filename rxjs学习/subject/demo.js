// Subject 可以拿去訂閱 Observable(source) 代表他是一個 Observer， 同時 Subject 又可以被 Observer(observerA, observerB) 訂閱， 代表他是一個 Observable
// Subject 同時是 Observable 又是 Observer
// Subject 會對內部的 observers 清單進行組播(multicast)
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
}

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
}

var subject = new Rx.Subject();

subject.subscribe(observerA);

source.subscribe(subject);

setTimeout(() => {
  subject.subscribe(observerB);
}, 1000);

// "A next: 0"
// "A next: 1"
// "B next: 1"
// "A next: 2"
// "B next: 2"
// "A complete!"
// "B complete!"
