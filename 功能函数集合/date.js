function getWeekTime() {
  return [...new Array(7)].map((j, i) => new Date(Date.now() + i * 8.64e7).toLocaleDateString())
}

/**
 * @param {string} format
 * @param {number} timestamp - 时间戳
 * @return {string}
 */
function formatDate(format = 'Y-M-D h:m', timestamp = Date.now()) {
  let date = new Date(timestamp)
  let dateInfo = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  }
  let formatNumber = (n) => n > 10 ? n : '0' + n
  let res = format
    .replace('Y', dateInfo.Y)
    .replace('M', dateInfo.M)
    .replace('D', dateInfo.D)
    .replace('h', formatNumber(dateInfo.h))
    .replace('m', formatNumber(dateInfo.m))
    .replace('s', formatNumber(dateInfo.s))
  return res
}

formatDate() // "2020-2-24 13:44"
formatDate('M月D日 h:m') // "2月24日 13:45"
formatDate('h:m Y-M-D', 1582526221604) // "14:37 2020-2-24"