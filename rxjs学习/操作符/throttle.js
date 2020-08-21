// RxJS 有 throttle 跟 throttleTime 兩個方法，一個是傳入 observable 另一個是傳入毫秒，比較常用到的也是 throttleTime
// throttle 更適合用在連續性行為，比如說 UI 動畫的運算過程，因為 UI 動畫是連續的，像我們之前在做拖拉時，就可以加上 throttleTime(12) 讓 mousemove event 不要發送的太快，避免畫面更新的速度跟不上樣式的切換速度。
var source = Rx.Observable.interval(300).take(5);
var example = source.throttleTime(1000);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 0
// 4
// complete