// mergeAll 也是同樣的道理，它會把二維的 observable 轉成一維的，並且能夠同時處理所有的 observable
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000));

var example = source.mergeAll();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//  mergeAll 可以傳入一個數值，這個數值代表他可以同時處理的 observable 數量

// 當 mergeAll 傳入參數後，就會等處理中的其中一個 observable 完成，再去處理下一個。以我們的例子來說，前面兩個 observabel 可以被並行處理，但第三個 observable 必須等到第一個 observable 結束後，才會開始。
// click  : ---------c-c----------o----------.. 
//         map(e => Rx.Observable.interval(1000))
// source : ---------o-o----------c----------..
//                    \ \          \----0----1----2|     
//                     \ ----0----1----2|  
//                      ----0----1----2|
//                      mergeAll(2)
// example: ----------------00---11---22---0----1----2--..