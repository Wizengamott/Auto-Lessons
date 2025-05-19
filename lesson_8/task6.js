const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

let array = [...numbersList]

array.sort((a, b) => b - a) // пішов від більшого до меншого

console.log(numbersList)
console.log(array)