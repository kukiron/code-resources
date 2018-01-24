// Checking whether part of the string is in the right order as in the original string
function isOrderCorrect(s, part) {
  var o = -1
  return part.split("").every(c => (o = s.indexOf(c, o + 1)) !== -1)
}

isOrderCorrect("Codewars", "Code")
