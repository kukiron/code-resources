function braces(values) {
  let i,
    result = []

  for (i = 0; i < values.length; i++) {
    isBalanced(values[i]) ? result.push("YES") : result.push("NO")
  }

  return result
}

function isBalanced(str) {
  let i,
    char,
    expectedBraces,
    temp = []

  const openingBraces = ["[", "{", "("],
    closingBraces = ["]", "}", ")"]

  for (i = 0; i < str.length; i++) {
    char = str[i]

    if (openingBraces.indexOf(char) > -1) {
      temp.push(char)
    } else if (closingBraces.indexOf(char) > -1) {
      expectedBraces = openingBraces[closingBraces.indexOf(char)]

      if (temp.length === 0 || temp.pop() !== expectedBraces) return false
    }
  }

  return temp.length === 0
}

var i1 = ["{}[]()", "{[}]"]

var i2 = [
  "{[}]",
  "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]",
  "{}[]()"
]

console.log(braces(i1))
console.log(braces(i2))
