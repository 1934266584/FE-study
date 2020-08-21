// first 會取 observable 送出的第 1 個元素之後就直接結束，行為跟 take(1) 一致。
var source = Rx.Observable.interval(1000);
var example = source.first();

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
// complete!