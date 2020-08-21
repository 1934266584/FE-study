// takeLast 反序取最后的几个数据  notice: takeLast 必須等到整個 observable 完成(complete)，才能知道最後的元素有哪些，並且同步送出

var source = Rx.Observable.interval(1000).take(6);
var example = source.takeLast(2);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }  
})

// 4
// 5
// complete
// 这几个是同时发出来的