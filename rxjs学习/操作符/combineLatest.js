// 取得各個 observable 最後送出的值，再輸出成一個值,当其中一个observable的最后一个值更新的时候，会再输出一个值
var source = Rx.Observable.interval(500).take(3);
var newest = Rx.Observable.interval(300).take(6);

// combineLatest 可以接收多個 observable，最後一個參數是 callback function，這個 callback function 接收的參數數量跟合併的 observable 數量相同，依照範例來說，因為我們這裡合併了兩個 observable 所以後面的 callback function 就接收 x, y 兩個參數，x 會接收從 source 發送出來的值，y 會接收從 newest 發送出來的值。最後一個重點就是一定會等兩個 observable 都曾有送值出來才會呼叫我們傳入的 callback
var example = source.combineLatest(newest, (x, y) => x + y);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// complete