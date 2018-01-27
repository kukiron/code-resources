// Calculate the nth fibonacci number with matrix exponentiation

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

const fibonacci = n => (n < 2 ? n : power([1, 1, 0], n - 1)[0])

module.exports = fibonacci

// Simpler solutions
/*
function fibonacci(N) {
  return n < 2
    ? n
    : fibonacci(N - 1) + fibonacci(N - 2)
}
*/
/*
function fibonacci(N) {
  const phi = (1 + Math.sqrt(5)) / 2
  return Math.floor(Math.pow(phi, N) / Math.sqrt(5) + 0.5)
}
*/
