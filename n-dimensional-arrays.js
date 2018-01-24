// Function to create an n-dimensional array:

function createArray(length) {
  let arr = new Array(length || 0),
    i = length

  if (arguments.length > 1) {
    let args = [].slice.call(arguments, 1)

    while (i--) arr[length - 1] = createArray.apply(this, args)
  }

  return arr
}

// const result = createArray() // [] or new Array()
// const result = createArray(2) // new Array(2)
const result = createArray(3, 2) // [new Array(2), new Array(2), new Array(2)]
result

// Link --> https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
