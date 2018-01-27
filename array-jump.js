/**
 * Get the number of jumps for a pawn to exit array
 * Jump pattern --> from A[k] = M to A[K + M]
 * Return -1 if the pawn never gets out of the array
 */

function arrayJump(A) {
  let current = 0,
    jumps = 0

  while (current >= 0 && current < A.length) {
    if (A[current]) {
      let next = current + A[current]

      A[current] = 0
      current = next
      jumps += 1
    } else return -1
  }

  return jumps
}

module.exports = arrayJump
