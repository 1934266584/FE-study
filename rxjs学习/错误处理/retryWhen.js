// 把例外發生的元素放到一個 observable 中，讓我們可以直接操作這個 observable，並等到這個 observable 操作完後再重新訂閱一次原本的 observable。

var source = Rx.Observable.from(['a','b','c','d',2])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source
                .map(x => x.toUpperCase())
                .retryWhen(errorObs => errorObs.delay(1000));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); 
// example: ----a----b----c----d-------------------a----b----c----d----...
// retryWhen 我們傳入一個 callback，這個 callback 有一個參數會傳入一個 observable，這個 observable 不是原本的 observable(example) 而是例外事件送出的錯誤所組成的一個 observable，我們可以對這個由錯誤所組成的 observable 做操作，等到這次的處理完成後就會重新訂閱我們原本的 observable。

// demo
var source = Rx.Observable.from(['a','b','c','d',2])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source
                .map(x => x.toUpperCase())
                .retryWhen(
                errorObs => errorObs.map(err => fetch('...')));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); 