// Using a hashmap --> O(N logN)
function complementaryPairs(A, K) {
  let count = 0

  const hash = A.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1)
    return acc
  }, {})

  for (let i in hash) {
    if (hash.hasOwnProperty([K - i])) {
      count += hash[i] * hash[K - i]
    }
  }
  return count
}

module.exports = complementaryPairs

// Naive approach --> O(n^2)
/*
const complementaryPairs = (A, K) => {
  let count = 0

  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[i] + A[j] === K) {
        i !== j ? (count += 2) : count++
      }
    }
  }
  return count
}
*/
