// switch 在新的 observable 送出後直接處理新的 observable 不管前一個 observable 是否完成，每當有新的 observable 送出就會直接把舊的 observable 退訂(unsubscribe)，永遠只處理最新的 observable!
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000));

var example = source.switch();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 第一次点击 0  1  2  3  第二次点击 0  1  2  3