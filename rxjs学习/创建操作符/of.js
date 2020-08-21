// 传递几个值，然后结束 
var source = Rx.Observable.of('Jerry', 'Anna');

source.subscribe({
  next(value) {
    console.log(value)
  },
  complete(value) {
    console.log('complete!')
  },
  error(err) {
    console.log(err)
  }
})

// Jerry
// Anna
// complete!