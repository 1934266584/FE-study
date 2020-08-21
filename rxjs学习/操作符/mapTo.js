var source = Rx.Observable.interval(1000);
var newest = source.mapTo(2);

newest.subscribe(console.log)