// 使得 RxJS 强大的正是它使用纯函数来产生值的能力
var count = 0;
var button = document.querySelector('button');
button.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// use Rxjs
var btn = document.querySelector('button');
Rx.Observable.fromEvent(btn, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`clicked ${count} times`));

// scan 操作符的工作原理与数组的 reduce 类似。它需要一个暴露给回调函数当参数的初始值。每次回调函数运行后的返回值会作为下次回调函数运行时的参数。