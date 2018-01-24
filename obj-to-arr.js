/**
 * Data structure conversion
 * A function that takes an object
 * & converts it (object keys or values) to an array
 */

const toArray = obj => {
  let arr = [],
    prop

  for (prop in obj) {
    obj.hasOwnProperty(prop) && arr.push(prop) // or obj[prop]
  }

  return arr
}

toArray({ a: "me", b: "we", c: "us" })
