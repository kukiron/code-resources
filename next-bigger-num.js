/**
 * Create a function that takes a positive integer number and
 * returns the next bigger number formed by the same digits
 */
const sortedDigits = num => {
  let arr = num.toString().split("")
  return arr.sort((a, b) => b - a)
}

const nextBigger = n => {
  let arr = sortedDigits(n),
    max = parseInt(arr.join(""))

  for (let i = n + 1; i <= max; i++) {
    sortedDigits(i).every((item, index) => item === arr[index])
    return i
  }

  return -1
}

// const getNextBigger = nextBigger(326)
const getNextBigger = nextBigger(3287236)
getNextBigger

// https://www.codewars.com/kata/55983863da40caa2c900004e/solutions/javascript
