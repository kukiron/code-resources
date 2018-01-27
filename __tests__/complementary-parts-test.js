const complementaryPairs = require("../complementary-pairs")

describe("Array", () => {
  it("should have complementary pairs", () => {
    expect(complementaryPairs([1, 8, -3, 0, 1, 3, -2, 4, 5], 6)).toEqual(7)
  })

  it("should have complementary pairs", () => {
    expect(complementaryPairs([1, 4, 1, 0, 3, 2, -1, 6], 5)).toEqual(8)
  })

  it("should NOT have complementary pairs", () => {
    expect(complementaryPairs([1, 4, 34, -3, 5, 9, -23], 100)).toEqual(0)
  })

  it("should have complementary pairs", () => {
    expect(complementaryPairs([1, -1, -1, 1, -1, 1, -1, 1], 0)).toEqual(32)
  })

  it("should have complementary pairs", () => {
    expect(complementaryPairs([1, 2, 3, 4, 5, 6, 7], 8)).toEqual(7)
  })

  it("should have complementary pairs", () => {
    expect(
      complementaryPairs(
        [
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
          9,
          2,
          1,
          -3,
          7
        ],
        4
      )
    ).toEqual(36)
  })
})
