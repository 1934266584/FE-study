//  函数柯西化
/**
 * 中转函数
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数
 * @param args  已接收的参数列表
 */
const _curry = function(fn, length, ...args) {
  return function(...params) {
    let _args = [...args, ...params];
    if (_args.length >= length) {
      return fn.apply(this, _args)
    } else {
      return _curry.call(this, fn, length, ..._args)
    }
  }
}
/**
 * @Author: 肖景
 * @description: 将函数柯里化
 * @param fn 待柯里化的原函数
 * @param length 所需的参数个数，默认为原函数的形参个数
 * @return:  一个函数
 * @Date: 2019-07-08 15:03:42
 */
const curry = function(fn, length = fn.length) {
  return _curry.call(this, fn, length)
}

let _fn = curry((a, b, c, d, e) => {
  console.log(a, b, c, d, e)
})

_fn(1, 2, 3, 4, 5, 6)

_fn(1)(2)(3, 4, 5)

_fn(1, 2)(3, 4)(5)

