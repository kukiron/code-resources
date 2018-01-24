// the fibonacci number

function fibonacci(N) {
  const phi = (1 + Math.sqrt(5)) / 2
  return Math.floor(Math.pow(phi, N) / Math.sqrt(5) + 0.5)
}

const result = fibonacci(233)
result
