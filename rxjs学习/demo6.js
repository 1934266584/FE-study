function sumOfSquares2(nums) {
  return nums
    .map(value => value * value)
    .reduce((start, sum) => start + sum, 0)
}

console.log(sumOfSquares2([1,2,3,4,5]));

function compose(a) {
  return function(b) {
    return a + b;
  }
}