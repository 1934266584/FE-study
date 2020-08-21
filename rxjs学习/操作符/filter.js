// 与array的filter是同一个用法
var source = Rx.Observable.interval(1000);
var newest = source.filter(x => x % 2 === 0);

newest.subscribe(console.log)
// 0

// 2

// 4

// 6