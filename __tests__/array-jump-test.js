const arrayJump = require("../array-jump")

describe("Pawn", () => {
  it("should jump out", () => {
    expect(arrayJump([2, 3, -1, 1, 3])).toEqual(4)
  })

  it("should jump out", () => {
    expect(arrayJump([3, 0, 2, -1, 4, 10, -3, 4, -1])).toEqual(6)
  })

  it("should stay inside", () => {
    expect(arrayJump([1, 1, 1, -3, 0, 7])).toEqual(-1)
  })

  it("should jump out immediately", () => {
    expect(arrayJump([-2, 0, 0, 0, 11])).toEqual(1)
  })

  it("should jump out", () => {
    expect(arrayJump([1, 3, 1, 1, 1, 4])).toEqual(4)
  })

  it("should jump out", () => {
    expect(
      arrayJump([
        2,
        3,
        4,
        3,
        4,
        3,
        3,
        5,
        11,
        -5,
        9,
        -3,
        -14,
        0,
        6,
        4,
        -9,
        -1,
        0,
        -2,
        9
      ])
    ).toEqual(11)
  })
})
