// switchMap 其實就是 map 加上 switch 簡化的寫法
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source
                .map(e => Rx.Observable.interval(1000).take(3))
                .switch();
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 改写
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source
                .switchMap(
                    e => Rx.Observable.interval(100).take(3)
                );
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// source : -----------c--c-----------------...
//         concatMap(c => Rx.Observable.interval(100).take(3))
// example: -------------0--0-1-2-----------...

function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.switchMap(
                    e => Rx.Observable.from(getPostData()));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});