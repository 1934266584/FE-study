// 當 timer 有兩個參數時，第一個參數代表要發出第一個值的等待時間(ms)，第二個參數代表第一次之後發送值的間隔時間
var source = Rx.Observable.timer(1000, 5000);

source.subscribe({
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!');
  },
  error: function (error) {
    console.log('Throw Error: ' + error)
  }
});
// 0
// 1
// 2 ...

// timer 第一個參數除了可以是數值(Number) 之外， 也可以是日期(Date)， 就會等到指定的時間在發送第一個值。

// 另外 timer 也可以只接收一個參數

var source = Rx.Observable.timer(1000);

source.subscribe({
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!');
  },
  error: function (error) {
    console.log('Throw Error: ' + error)
  }
});
// 0
// complete!