函数合成
export function compose() {
  let args = arguments
  const start = args.length - 1
  return function() {
    let i = start
    let result = args[start].apply(this, arguments)
    while(i--) {
      result = args[i].call(this, result)
    }
    return result
  }
}

const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

const test = pipeFunctions(a => a * a, b => b + 1)

console.log(test(0))
