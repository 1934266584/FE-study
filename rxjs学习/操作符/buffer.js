// buffer 要傳入一個 observable，它會把原本的 observable送出的元素緩存在陣列中，等到傳入的 observable送出元素時，就會觸發把緩存的元素送出。
var source = Rx.Observable.interval(300);
var source2 = Rx.Observable.interval(1000);
var example = source.buffer(source2);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...

// bufferTime 按照多少秒来发送一个元素
var source = Rx.Observable.interval(300);
var example = source.bufferTime(1000);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...

// 用數量來做緩存
var source = Rx.Observable.interval(300);
var example = source.bufferCount(3);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...

// 用 buffer 來做某個事件的過濾，例如像是滑鼠連點才能真的執行
const button = document.getElementById('demo');
const click = Rx.Observable.fromEvent(button, 'click')
const example = click
                .bufferTime(500)
                .filter(arr => arr.length >= 2);

example.subscribe({
    next: (value) => { console.log('success'); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});