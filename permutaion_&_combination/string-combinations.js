function strCombinations(str) {
  let strArr = str.split(""),
    result = []

  function combine(prefix, strArr) {
    for (let i = 0; i < strArr.length; i++) {
      let curr = prefix + strArr[i]
      result.push(curr)
      combine(curr, strArr.slice(i + 1))
    }
  }

  combine("", strArr)
  return result
}

const getCombinations = strCombinations("abc")
getCombinations
// Similar to array-combination
