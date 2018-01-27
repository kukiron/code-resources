function getAllFactorsFor(num) {
  var factors = [],
    i

  for (i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i)
      num /= i
    }
  }

  return factors
}

const result = getAllFactorsFor(123)
result
