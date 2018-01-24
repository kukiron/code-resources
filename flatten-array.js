const arr = [[3, 5], [3, 7], [2, 2, 2, 3], [2, 3, 5], [3, 3, 5]]

const flattenedArr = arr.reduce((a, b) => a.concat(b), [])

console.log(flattenedArr)
