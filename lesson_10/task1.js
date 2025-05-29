// Tasks 3, 4

class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }
    static theOldestBook(book1, book2, book3) {
        let oldestBook = book1.year < book2.year ? book1 : book2;
        return oldestBook.year < book3.year ? oldestBook : book3
    }
    get title() {
        return this._title
    }
    set title(newTitle) {
        if (typeof newTitle != 'string' || newTitle.length <= 0) {
            console.log('Please, provide a valid Title')
            return
        }  
            this._title = newTitle
        }
    get author() {
        return this._author
    }
    set author(newAuthor) {
        if (typeof newAuthor != 'string' || newAuthor.length <= 0) {
            console.log('Please, provide a valid Author')
            return
        }  
            this._author = newAuthor
        }
     get year() {
         return this._year
    }
     set year(newYear) {
       if (typeof newYear != 'number' || newYear.length <= 0) {
             console.log('Please, provide a valid Year')
              return
          }  
              this._year = newYear
         }
}

// --------------- Task 3 ---------------
let book1 = new Book ('', 'fdf', 1980)      // поверне нам помилку
let book2 = new Book ('dsd', 'fdf', 1958)   // нічого не поверне, бо тайтл валідний
console.log(book1.title)                    // виведе undefined, бо поле пусте
console.log(book2.title)                    // виведе тайтл

let book3 = new Book ('Test', '', 123)      // поверне нам помилку
let book4 = new Book ('dsd', 'fdf', 1970)   // нічого не поверне, бо автор валідний
console.log(book3.author)                   // виведе undefined, бо поле пусте
console.log(book4.author)                   // виведе автора

let book5 = new Book ('Test', 'fdf', )      // поверне нам помилку. Як стрінгу теж перевірив окремо
let book6 = new Book ('dsd', 'fdf', 123)    // нічого не поверне, бо рік валідний 
console.log(book5.year)                     // виведе undefined, бо поле пусте
console.log(book6.year)                     // виведе рік

class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super (title, author, year);
        this.fileFormat = fileFormat
    }
    static bookToEbook(book, fileFormat) {
    
        return new EBook(book.title, book.author, book.year, this.fileFormat = fileFormat)
    }
}

let eBook1 = new EBook ('White Fang', 'Jack London', 1906, 'epub')

console.log(Book.theOldestBook(book2, book4, eBook1))               // Task 4

console.log(EBook.bookToEbook(book2, 'txt'))                        // Task 5 