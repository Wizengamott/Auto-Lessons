
let handleNum = (num, handleOdd, handleEven) => {
    if (typeof num !== 'number') {      // трошки довелось подумати, погуглити і згадати, як включити тут перевірку num на тип
        return "This is not a number"
    } else if (handleOdd(num)) {
        return "This number is odd"
    } else if (handleEven(num)) {
        return "This number is even"
    }
}

let handleOdd = (num) => {
    return num % 2 !== 0
}
let handleEven = (num) => {
    return num % 2 === 0
}
console.log (handleNum (5, handleOdd, handleEven))
console.log (handleNum (10, handleOdd, handleEven))
console.log (handleNum ('test1', handleOdd, handleEven))