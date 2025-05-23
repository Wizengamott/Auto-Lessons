let car1 = {
    brand : "Mazda",
    model : "6",
    year : 2015
}

let car2 = {
    brand : "Honda",
    model : "Civic",
    owner : "Honda Company"
}

let car3 = {...car1, ...car2}

console.log(car3)