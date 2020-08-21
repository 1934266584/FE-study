// skip 忽略前几个送出的元素
var source = Rx.Observable.interval(1000);
var example = source.skip(3);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 第一个元素出现需要4秒哦
// 3
// 4
// 5...