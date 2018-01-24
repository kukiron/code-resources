const permutator = inputArr => {
  let result = []

  const permute = (arr, m = []) => {
    if (arr.length === 0) result.push(m)
    else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice(),
          next = curr.splice(i, 1)
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr)
  return result
}

// permutator([2, 4])
// permutator([1, 4, 3, 5])
const permuteArr = permutator([3, 6, 7])
permuteArr

// https://stackoverflow.com/questions/9960908/permutations-in-javascript
