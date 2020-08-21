// Rx 有 debounce 跟 debounceTime 一個是傳入 observable 另一個則是傳入毫秒，比較常用到的是 debounceTime
//  debounce 運作的方式是每次收到元素，他會先把元素 cache 住並等待一段時間，如果這段時間內已經沒有收到任何元素，則把元素送出；如果這段時間內又收到新的元素，則會把原本 cache 住的元素釋放掉並重新計時，不斷反覆。
var source = Rx.Observable.interval(300).take(5);
var example = source.debounceTime(1000);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// 4
// complete


// demo1
const searchInput = document.getElementById('searchInput');
const theRequestValue = document.getElementById('theRequstValue');

Rx.Observable.fromEvent(searchInput, 'input')
  debounceTime(300)
  .map(e => e.target.value)
  .subscribe(value => {
    theRequestValue.textContent = value;
  })