// withLatestFrom 運作方式跟 combineLatest 有點像， 只是他有主從的關係， 只有在主要的 observable 送出新的值時， 才會執行 callback
var main = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), (x, y) => x);
var some = Rx.Observable.from([0,1,0,0,0,1]).zip(Rx.Observable.interval(300), (x, y) => x);

var example = main.withLatestFrom(some, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
});

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// h
// e
// l
// L
// O