/**
 * In this module we'll check whether a certain type of data structure is Array or object
 * To do that we'll find a random element from a collection of data (Array or Object)
 */

// Convert object into an array
const toArray = obj => {
  let arr = [],
    prop

  for (prop in obj) {
    obj.hasOwnProperty(prop) && arr.push(prop) // or obj[prop]
  }

  return arr
}

const randomItem = collection => {
  /**
   * check the data structure of the object here
   * and convert it to array regardless
   */
  const arr =
    {}.toString.call(collection) === "[object Object]"
      ? toArray(collection)
      : collection

  // Pick a random number from the list of array
  return arr[Math.floor(Math.random() * arr.length)]
}

const result = randomItem({ 1: "a", 2: "b", 3: "c", 4: "d" })
// const result = randomItem([1, 2, 3, 4, 5, 6, 7, 8])
result
