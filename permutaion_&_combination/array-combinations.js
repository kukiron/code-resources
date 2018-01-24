const combinator = input => {
  let result = []

  const combine = (prefix, input) => {
    for (let i = 0; i < input.length; i++) {
      let curr = prefix + input[i]
      result.push(curr)
      combine(curr, input.slice(i + 1))
    }
  }

  combine("", input)
  return result
}

const getCombinations = combinator(["a", "b", "c"])
getCombinations

// https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
