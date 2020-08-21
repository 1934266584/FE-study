// delayWhen 的作用跟 delay 很像，最大的差別是 delayWhen 可以影響每個元素，而且需要傳一個 callback 並回傳一個 observable
var source = Rx.Observable.interval(300).take(5);

var example = source
              .delayWhen(
                  x => Rx.Observable.empty().delay(100 * x * x)
              );

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});