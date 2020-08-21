// distinctUntilChanged 跟 distinct 一樣會把相同的元素過濾掉，但 distinctUntilChanged 只會跟最後一次送出的元素比較，不會每個都比
var source = Rx.Observable.from(['a', 'b', 'c', 'c', 'b'])
            .zip(Rx.Observable.interval(300), (x, y) => x);
var example = source.distinctUntilChanged()

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// a
// b
// c
// b
// complete