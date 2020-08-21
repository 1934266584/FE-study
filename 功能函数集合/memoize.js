// cacheable 可缓存性
export const memoize = function(f) {
  let cache = {};

  return function() {
    const args_str = JSON.stringify(arguments);
    cache[args_str] = cache[args_str] || f.apply(f, arguments);
    return cache[args_str];
  }
}


// 通过延迟执行的方式将不纯的函数转换成纯函数
const pureHttpCall = memoize(function(url, params) {
  return function() {
    return $.getJSON(url, params)
  }
})
