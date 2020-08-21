// 与 first 相反的意思 last
var source = Rx.Observable.interval(1000).take(6);
var example = source.last();

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 5
// complete