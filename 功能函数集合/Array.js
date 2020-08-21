// 判断一个数组所有的值是否都满足某一个函数 
/**
 * return Boolean值 
 * @param {数组} arr 
 * @param {函数} fn 
 */
export const all = (arr, fn = Boolean) => arr.every(fn);

// 判断一个数组所有的值是否都相等
/**
 * return Boolean值 
 * @param {数组} arr  
 */
export const allEqual = arr => arr.every(val => val === arr[0]);

