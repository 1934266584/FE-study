// concatMap 其實就是 map 加上 concatAll 的簡化寫法
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source
                .map(e => Rx.Observable.interval(1000).take(3))
                .concatAll();
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 简写
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source
                .concatMap(
                    e => Rx.Observable.interval(100).take(3)
                );
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// source : -----------c--c------------------...
//         concatMap(c => Rx.Observable.interval(100).take(3))
// example: -------------0-1-2-0-1-2---------...


// 网络请求
function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.concatMap(
                    e => Rx.Observable.from(getPostData()));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// concatMap 還有第二個參數是一個 selector callback，這個 callback 會傳入四個參數，分別是
// 外部 observable 送出的元素
// 內部 observable 送出的元素
// 外部 observable 送出元素的 index
// 內部 observable 送出元素的 index