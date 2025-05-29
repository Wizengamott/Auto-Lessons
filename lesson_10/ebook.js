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

class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super (title, author, year);
        this.fileFormat = fileFormat
    }
    printInfo() {
        console.log(`This EBook "${this.title}" was written by ${this.author} in ${this.year} and available in ".${this.fileFormat}" format`)
    }
}

let eBook1 = new EBook ('White Fang', 'Jack London', 1906, 'epub')

eBook1.printInfo()