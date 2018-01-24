// Example stateless or pure function

let arr = [1, 2, 3, 4]

function safeRotate(arr) {
  const newArr = arr.slice(0)
  newArr.push(newArr.shift())

  console.log(arr) // arr not changed --> [1, 2, 3, 4]
  return newArr
}

safeRotate(arr)

// As opposed to the following where the function is changing the state of the arr
function rotate(arr) {
  arr.push(arr.shift())

  console.log(arr) // arr changed --> [2, 3, 4, 1]
  return arr
}

rotate(arr)
