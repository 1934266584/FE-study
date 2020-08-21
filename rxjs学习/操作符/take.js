// take 取前几个元素后就结束
var source = Rx.Observable.interval(1000);
var example = source.take(3);

example.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('complete!')
  },
  error(err) {
    console.log('error: ' + err)
  }
})
// 0
// 1
// 2
// complete