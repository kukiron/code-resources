let date = new Date(null)
const seconds = 34562
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

const newSec = date.setSeconds(seconds)
const timeStamp = date.toUTCString()
console.log(timeStamp)
console.log(newSec)
// console.log(`${hours}:${minutes}:${seconds}`);
