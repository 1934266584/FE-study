function* getNumbers(word) {
  for (let word of words) {
    if (/^[0-9]+$/.test(word)) {
      yield parseInt(word, 10);
    }
  }
}

const iterator = getNumbers('30 天精通 RxJS (04)');

iterator.next();
// { value: 3, done: false }
iterator.next();
// { value: 0, done: false }
iterator.next();
// { value: 0, done: false }
iterator.next();
// { value: 4, done: false }
iterator.next();
// { value: undefined, done: true }