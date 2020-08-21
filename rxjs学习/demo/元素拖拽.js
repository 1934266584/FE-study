const dragDOM = document.getElementById('drag');
const body = document.body;

const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown')
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup')
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove')

// 當 mouseDown 時，轉成 mouseMove 的事件. 意想不到的地方
mouseDown
  .map(event => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .map(m => {
    return {
      x: m.clientX,
      y: m.clientY
    }
  })
  .subscribe(pos => {
    dragDOM.style.left = pos.x + 'px';
    dragDOM.style.top = pos.y + 'px';
  })