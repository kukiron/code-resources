// Find a pair of numbers in an array that add to a given target

function pairsWithSum(arr, target) {
  let found = {},
    results = []

  for (let i of arr) {
    if (found[target - i] === true) {
      // pair found
      results.push({
        a: i,
        b: target - i
      })
    }
    found[i] = true
  }
  return results
}

const result = pairsWithSum([1, 8, -3, 0, 1, 3, -2, 4, 5], 6)
// const result = pairsWithSum([0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51], 100)
result
// https://codereview.stackexchange.com/questions/74152/given-an-array-of-integers-return-all-pairs-that-add-up-to-100/74187#74187
