/**
 * Data structure conversion
 * A function that takes an array (or array of key/value pair arrays)
 * & convert it to an array of object
 */

function arrToObj(arr) {
  let newArr = [],
    len = arr.length

  for (let i = 0; i < len; i += 2) {
    newArr.push(arr.slice(i, i + 2))
  }

  // square bracket notation from computed property accessors
  return newArr.map(([key, val]) => ({ [key]: val }))
}

const result = arrToObj([1, "a", 2, "b", 3, "c", 4, "d"])
result
