// interval 有一個參數必須是數值(Number)，這的數值代表發出訊號的間隔時間(ms)
var source = Rx.Observable.interval(1000);

source.subscribe({
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