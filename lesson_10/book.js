class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }
printInfo () { 
    console.log(`This book "${this.title}" was written by ${this.author} in ${this.year}`)
    }
}

let book1 = new Book ('White Fang', 'Jack London', 1906)
let book2 = new Book ('1984', 'George Orwell', 1949)

book1.printInfo()
book2.printInfo()