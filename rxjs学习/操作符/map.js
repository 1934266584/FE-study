// map 方法和 array的map方法一样
var source = Rx.Observable.interval(1000);
var newest = source.map(x => x + 2);

newest.subscribe(value => console.log(value))
// 2
// 3
// 4
// 5..