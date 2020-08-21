// 将一元数组转换成二元数组
// window 很類似 buffer 可以把一段時間內送出的元素拆出來，只是 buffer 是把元素拆分到陣列中變成
// Observable<T> => Observable<Array<T>>
// 而 window 則是會把元素拆分出來放到新的 observable 變成
// Observable<T> => Observable<Observable<T>>
var click = Rx.Observable.fromEvent(document, 'click');
var source = Rx.Observable.interval(1000);
var example = click.window(source)

example
  .map(innerObservable => innerObservable.count())
  .switch()
  .subscribe(console.log);

// source : ---------0---------1---------2--...
// click  : --cc---cc----c-c----------------...
//                     window(source)
// example: o--------o---------o---------o--..
//          \        \         \         \
//           -cc---cc|---c-c---|---------|--..
//                     count()
//        : o--------o---------o---------o--
//          \        \         \         \
//           -------4|--------2|--------0|--..
//                     switch()
//        : ---------4---------2---------0--... 