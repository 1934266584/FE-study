// delay 延迟observable一开始发送元素的时间点
var source = Rx.Observable.interval(300).take(5);
var example = source.delay(500);
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// or
var source = Rx.Observable.interval(300).take(5);
var example = source.delay(new Date(new Date().getTime() + 1000));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});