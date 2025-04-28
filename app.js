// app.js

const mathModule = require('./math.js');

const sum = mathModule.add(5, 3);
const difference = mathModule.subtract(5, 3);

console.log(sum); // Output: Sum: 8
console.log(difference); // Output: Difference: 2
