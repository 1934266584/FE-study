// concat 可以把多個 observable 實例合併成一個
// 跟 concatAll 一樣，必須先等前一個 observable 完成(complete)，才會繼續下一個
// concat 還可以當作靜態方法使用
var source = Rx.Observable.interval(1000).take(3);
var source1 = Rx.Observable.of(3);
var source2 = Rx.Observable.from([5, 6, 7]);

var example = source.concat(source1, source2);
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// complete


// demo2 
var source = Rx.Observable.interval(1000).take(3);
var source2 = Rx.Observable.of(3);
var source3 = Rx.Observable.of(4,5,6);
var example = Rx.Observable.concat(source, source2, source3);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});