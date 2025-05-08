// declaration
function rectangleArea1 (height, width) {
    return height * width;
}
console.log("Declaration - " + rectangleArea1(10, 15));

// expression
const rectangleArea2 = function (height, width) {
    return height * width
}
console.log("Expression - " + rectangleArea2(8, 10));

// arrow function
const rectangleArea3 = (width, height) => {
    return width * height
}
console.log("Arrow function - " + rectangleArea3(5, 7));