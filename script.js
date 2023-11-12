// book class
class Book {
    constructor(title, author, pages, isbn, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isbn = isbn;
        this.index = index;    
    }
}

// library class
class Library {
    constructor() {
        this.books = [];
    }
}