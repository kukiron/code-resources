const fibonacci = require("../fibonacci-big_number")

describe("n-th Fibonacci", () => {
  it("has last six digits", () => {
    expect(fibonacci(8)).toEqual(21)
  })

  it("has last six digits", () => {
    expect(fibonacci(36)).toEqual(930352)
  })

  it("has last six digits", () => {
    expect(fibonacci(52)).toEqual(280099)
  })

  it("has last six digits", () => {
    expect(fibonacci(88)).toEqual(101931)
  })

  it("has last six digits", () => {
    expect(fibonacci(123)).toEqual(975682)
  })

  it("has last six digits", () => {
    expect(fibonacci(187)).toEqual(30533)
  })

  it("has last six digits", () => {
    expect(fibonacci(1000)).toEqual(228875)
  })

  it("has last six digits", () => {
    expect(fibonacci(500000)).toEqual(453125)
  })
})
