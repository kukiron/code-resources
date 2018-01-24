// Get the least six digits from the end
// from a fibonacci number
function lastSixDigits(N) {
  const phi = (1 + Math.sqrt(5)) / 2
  let num = Math.floor(Math.pow(phi, N) / Math.sqrt(5) + 0.5)

  let numStr = num
    .toLocaleString()
    .split(",")
    .join("")

  if (numStr.length > 6) {
    numStr = numStr.substr(numStr.length - 6)
  }

  return parseInt(numStr)
}

const result = lastSixDigits(23)
result
