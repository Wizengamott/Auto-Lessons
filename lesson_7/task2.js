let testNum = (num) => {
    console.log (num)
    if (num > 0) {
       testNum (num - 1)
    }
}
testNum(5)

console.log("--------------")

let testNum2 = (num) => {
    console.log (num)
    if (num > 0) {
       testNum2 (num - 2)
    }
}
testNum2(5)