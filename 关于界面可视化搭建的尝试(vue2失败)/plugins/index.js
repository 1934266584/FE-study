const plugins = []
const requireAll = requireContext =>
  requireContext.keys().map(requireContext => {
    plugins.push(requireContext)
    return requireContext
  })
const req = require.context('./', false, /\.js$/)
requireAll(req)

plugins.forEach(pluginPath => {
  if (pluginPath !== './index.js') {
    require(`${pluginPath}`)
  }
})
