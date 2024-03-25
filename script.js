let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    library.push(this);
}

let book1 = new Book('book1', 'me',  '12', 'not read')
let book2 = new Book('book2', 'alsome', '13', 'read')
console.log(library);