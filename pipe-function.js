// Create a pipe function
const pipe = (...fns) => x => fns.reduce((prev, func) => func(prev), x)

const double = x => x * 2
const addTen = x => x + 10
const triple = x => x * 3
const negative = x => x * -1

const pipeFunction = pipe(double, addTen, triple, negative)

pipeFunction(11)
