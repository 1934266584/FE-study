// 直接抛错的 opertator
var source = Rx.Observable.throw('Oop!');

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

// err