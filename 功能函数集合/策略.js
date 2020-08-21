const levels = {
  'A': money => money * 4,
  'B': money => money * 3,
  'C': money => money * 2
}

const calculate = function(level, money) {
  return levels[level](money);
}