// 多个函数以此执行，且上个函数的返回值为下个函数的输入值
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f),Promise.resolve(arg));