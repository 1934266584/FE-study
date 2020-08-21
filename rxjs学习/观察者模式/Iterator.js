class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    return this._cursor < this._array.length ?
      { value: this._array[this._cursor++], done: false } :
      { done: true }
  }
}