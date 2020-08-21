// 用 Event 建立 Observable
// fromEvent 的第一個參數要傳入 DOM 物件，第二個參數傳入要監聽的事件名稱
var source = Rx.Observable.fromEvent(document.body, 'click');

source.subscribe({
  next(event) {
    console.log(event)
  },
  complete() {
    console.log('complete')
  },
  error(err) {
    console.log(err)
  }
})