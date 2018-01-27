/**
 * Import from BigInteger.js library to handle large numbers
 * With regular JS integers, precision starts losing after input = 78
 */

const one = require("big-integer").one,
  zero = require("big-integer").zero

const multiply = (...matrices) =>
  matrices.reduce(([a, b, c], [d, e, f]) => [
    a.times(d).plus(b.times(e)),
    a.times(e).plus(b.times(f)),
    b.times(e).plus(c.times(f))
  ])

const power = (matrix, n) => {
  if (n === 1) return matrix
  let halves = power(matrix, Math.floor(n / 2))

  return n % 2 === 0
    ? multiply(halves, halves)
    : multiply(halves, halves, matrix)
}

// Find the six least significcant digits of a large Fibonacci number
const leastSix = str => {
  str.length > 6 && (str = str.substr(str.length - 6))
  return parseInt(str)
}

const fibonacci = n => {
  let val
  n < 2 ? (val = n) : (val = power([one, one, zero], n - 1)[0])
  let numStr = val.toString()

  return leastSix(numStr)
}

module.exports = fibonacci
