const numbers = [1, 3, 6, 7, 9];

const updatedArray = numbers.map((number) => 
    number * numbers.indexOf(number)   // якщо я правильно зрозумів задачу :)
)

console.log(updatedArray)