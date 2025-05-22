let users = [
    {
        name : 'Olex',
        email : 'df@sf.df',
        age : 30
    },
    {
        name : 'Stepan',
        age : 40,
        city : 'Kyiv'
    },
    {
        name : 'Nataliya',
        age : 30,
        position : "COO"
    }
]

for (let person of users) {
    console.log(person)
    let { name, email = 'test@email', age, city = 'Unknown', position } = person
    console.log(name, email, age, city, position)
}