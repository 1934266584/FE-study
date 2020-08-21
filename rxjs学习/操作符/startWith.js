// startWith 可以在 observable 的一開始时加要發送的元素
var source = Rx.Observable.interval(1000);
var example = source.startWith(0);

example.subscribe({
  next(value) {
    console.log(value)
  },
  error(err) {
    console.log('error: ' + err)
  },
  complete() {
    console.log('complete!')
  }
})

// 0
// 0
// 1
// 2
// 3...
