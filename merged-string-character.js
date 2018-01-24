function isMerge(s, part1, part2) {
  let arr = new Array(s.length)
  for (let i = 0; i < s.length; i++) {
    if (part1.indexOf(s[i]) >= 0) arr[i] = s[i]
    if (part2.indexOf(s[i]) >= 0) arr[i] = s[i]
  }
  return (
    s.length === part1.length + part2.length &&
    isInOrder(s, part1) &&
    isInOrder(s, part2) &&
    arr.join("") === s
  )
}

function isInOrder(s, part) {
  let o = -1
  part.split("").every(c => (o = s.indexOf(c, o + 1) !== -1))
}

isMerge("codewars", "cod", "wars")

// Covering only the simplest of cases
/*
function isMerge(s, part1, part2) {
  const strArr = s.split(""),
    part1Arr = part1.split(""),
    part2Arr = part2.split(""),
    newArr = [...part1Arr, ...part2Arr]

  for (let i = 0; i < strArr.length; i++) {
    if (newArr.indexOf(strArr[i]) < 0) return false
  }
  return true
}

isMerge("codewars", "cod", "wars")
*/
