// 对于流经 observables 的值， 你可以对其进行转换。

// demo 累加每次点击的鼠标 x 坐标
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.querySelector('button');
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count)
    lastClick = Date.now();
  }
});

// use Rxjs
// 其他产生值的操作符有 pluck、pairwise、 sample 等等
var btn = document.querySelector('button');
Rx.Observable.fromEvent(btn, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count))