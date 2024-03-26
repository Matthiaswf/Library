const container = document.querySelector('.container');
let bookList = document.createElement('div');
bookList.classList.add('bookList');
container.appendChild(bookList);

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {

        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }

    library.push(this);
}

function BookFromForm(title, author, pages, read) {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    this.pages = document.getElementById('pages').value;
    this.read = document.getElementById('read').value;
    
    this.info = function() {

        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }

    library.push(this);
}

let book1 = new Book('book1', 'me',  '12', 'not read')
let book2 = new Book('book2', 'alsome', '13', 'read')
console.log(library);

const displayButton = document.querySelector('.button');
displayButton.addEventListener('click', () => {
    
library.forEach((book) => {

    let bookInfo = document.createElement('div');
    bookList.appendChild(bookInfo);
    bookInfo.textContent =  book.info();
})         
});
