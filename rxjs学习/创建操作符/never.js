// never 表示一直存在但却什么都不做的observable
var source = Rx.Observable.never();

source.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('complete!')
  },
  error(err) {
    console.log(err)
  }
})
