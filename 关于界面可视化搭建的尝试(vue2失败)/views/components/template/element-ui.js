import ElementUI from 'element-ui'

const component = Object.keys(ElementUI).reduce((result, current) => {
  if (ElementUI[current].name && ElementUI[current].name.includes('El')) {
    result.push(ElementUI[current].name)
  }
  return result
}, [])

export default component
