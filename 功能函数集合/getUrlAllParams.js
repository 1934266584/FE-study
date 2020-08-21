function getUrlAllParams(...args) {
  if (args.length === 0) return undefined
  const url = decodeURIComponent(window.location.href)
  const reg = args.length === 1 ?
    new RegExp(`[&?]${args[0]}=([^&%#]+)`) :
    new RegExp(`[&?](?:${args.join('|')})=([^&%#]+)`)

  const matchArray = url.match(reg)

  return matchArray === null ? undefined : matchArray[1]
}