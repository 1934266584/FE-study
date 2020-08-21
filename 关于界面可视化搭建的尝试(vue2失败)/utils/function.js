/* eslint-disable */

// 函数合成
const compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

export { compose }

// 多个函数以此执行，且上个函数的返回值为下个函数的输入值
const composeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

export { composeAsyncFunctions }
/**
 * 中转函数
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数
 * @param args  已接收的参数列表
*/
const _curry = function (fn, length, ...args) {
  return function (...params) {
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
const curry = function (fn, length = fn.length) {
  return _curry.call(this, fn, length)
}

export { curry }