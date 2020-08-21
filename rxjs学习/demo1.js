var button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

// use Rxjs
var btn = document.querySelector('button');
Rx.Observable.fromEvent(btn, 'click')
  .subscribe(() => console.log('Clicked!'))