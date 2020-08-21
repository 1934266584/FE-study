// 空的observable,如果我们订阅这个observable，它会立即发送complete消息
var source = Rx.Observable.empty();

source.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('complete')
  },
  error(err) {
    console.log(err)
  }
})

// complete! 