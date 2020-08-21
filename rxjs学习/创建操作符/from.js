// 把一个已经存在的阵列当作参数传入
// 任何可列舉的參數都可以用喔，也就是說像 Set, WeakSet, Iterator 等都可以當作參數！
//  from 還能接收字串(string)
var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
var source = Rx.Observable.from(arr);

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

// Jerry
// Anna
// 2016
// 2017
// 30 days
// complete!