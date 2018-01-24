/**
 * Get the number of jumps for a pawn to exit out of an array
 * jump pattern --> from A[k] = M to A[K + M]
 * return -1 if the pawn never gets out of the array
 */

function arrayJump(A) {
  let index = 0,
    current = 0,
    count = 0,
    len = A.length,
    arr = []

  do {
    current = index
    index += A[index]

    if (count >= len) return -1
    else count++

    // Get the record of all the pawn positions
    arr.push(current)
  } while (index < len)

  return arr.length - 1
}

const jumpNum = arrayJump([1, 3, 1, 1, 1, 4])
jumpNum
// https://stackoverflow.com/questions/15362852/simulating-pawn-jump-in-the-array-vector
