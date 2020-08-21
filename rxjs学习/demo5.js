// 控制流动
// 输入 “hello world”
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// 过滤掉小于3个字符长度的目标值
input.filter(event => event.target.value.length > 2)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // 'hel'

// 延迟事件
input.delay(300)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)) // "h" -200ms-> "e" -200ms-> "l" ...

// 每200ms只能通过一个事件
input.throttleTime(200)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)) // "h" -200ms-> "w" 

// 停止输入后200ms方能通过最新的那个事件
input.debounceTime(200)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "o" -200ms-> "d"

// 在3次事件后停止事件流
input.take(3)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hel"

// 直到其他 observable 触发事件才停止事件流
var stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
input.takeUntil(stopStream)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hello" (点击才能看到)

// 传递一个新的值
input.map(event => event.target.value)
  .subscribe(value => console.log(value)); // "h"

// 通过提取属性传递一个新的值
input.pluck('target', 'value')
  .subscribe(value => console.log(value)); // "h"

// 传递之前的两个值
input.pluck('target', 'value').pairwise()
  .subscribe(value => console.log(value)); // ["h", "he"]

// 只会通过唯一的值
input.pluck('data').distinct()
  .subscribe(value => console.log(value)); // "helo wrd"

// 不会传递重复的值
input.pluck('data').distinctUntilChanged()
  .subscribe(value => console.log(value)); // "helo world"