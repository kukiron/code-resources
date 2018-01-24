function strPermutations(str) {
  let permutations = [],
    next = [],
    chars = []

  if (typeof str === "string") chars = str.split("")
  else if (typeof str === "number") {
    str = str.toString()
    chars = str.split()
  }

  function permutate(chars) {
    if (chars.length === 0) permutations.push(next.join(""))
    for (let i = 0; i < chars.length; i++) {
      chars.push(chars.shift())
      next.push(chars[0])
      permutate(chars.slice(1))
      next.pop()
    }
  }
  permutate(chars)
  return permutations
}

const getPermutations = strPermutations("abc")
getPermutations
// https://codereview.stackexchange.com/questions/59615/recursive-function-that-generates-the-permutations-of-a-string
// https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
