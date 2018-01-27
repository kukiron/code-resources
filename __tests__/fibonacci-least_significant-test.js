const fibonacci = require("../fibonacci-least_significant")

describe("n-th Fibonacci", () => {
  it("with last six character", () => {
    expect(fibonacci(8)).toEqual(21)
  })

  it("with last six character", () => {
    expect(fibonacci(43)).toEqual(494437)
  })

  it("with last six character", () => {
    expect(fibonacci(73)).toEqual(49393)
  })

  it("with last six character", () => {
    expect(fibonacci(74)).toEqual(928657)
  })

  it("with last six character", () => {
    expect(fibonacci(75)).toEqual(978050)
  })

  it("with last six character", () => {
    expect(fibonacci(76)).toEqual(906707)
  })

  it("with last six character", () => {
    expect(fibonacci(78)).toEqual(791464)
  })

  it("with last six character", () => {
    expect(fibonacci(79)).toEqual(676221)
  }) // starts losing precision; fails by 1

  it("with last six character", () => {
    expect(fibonacci(140)).toEqual(408605)
  })
})
