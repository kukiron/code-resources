/**
 * Calculate the nth fibonacci number with matrix exponentiation
 * and find the six least significcant digits of a large Fibonacci number
 */

const multiply = (...matrices) =>
  matrices.reduce(([a, b, c], [d, e, f]) => [
    a * d + b * e,
    a * e + b * f,
    b * e + c * f
  ])

const power = (matrix, n) => {
  if (n === 1) return matrix
  let halves = power(matrix, Math.floor(n / 2))

  return n % 2 === 0
    ? multiply(halves, halves)
    : multiply(halves, halves, matrix)
}

// With JS integers, precision starts losing after input = 78
// Using a big integer library (BigInteger.js) can give accurate output
const leastSix = str => {
  str.length > 6 && (str = str.substr(str.length - 6))
  return parseInt(str)
}

const fibonacci = N => {
  let val
  N < 2 ? (val = N) : (val = power([1, 1, 0], N - 1)[0])
  let numStr = val.toString()

  return leastSix(numStr)
}

module.exports = fibonacci
