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
    this.indexValue = undefined;
    
    this.info = function() {

        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }

    library.push(this);
    this.indexValue = library.indexOf(this);
    console.log(library);
}

function BookFromForm(title, author, pages, read) {
    new Book(document.getElementById('title').value,
             document.getElementById('author').value,
             document.getElementById('pages').value,
             document.getElementById('read').value)
}

let book1 = new Book('book1', 'me',  '12', 'not read')
let book2 = new Book('book2', 'alsome', '13', 'read')

const displayButton = document.querySelector('.button');
displayButton.addEventListener('click', () => {
    
library.forEach((book) => {

    let bookInfo = document.createElement('div');
    bookList.appendChild(bookInfo);
    bookInfo.textContent =  book.info();
})         
});
