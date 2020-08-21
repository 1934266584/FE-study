var subject = new Rx.Subject();

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

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.next(1);
// "A next: 1"
// "B next: 1"
subject.next(2);
// "A next: 2"
// "B next: 2"