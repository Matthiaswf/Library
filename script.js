const container = document.querySelector('.container');
let bookList = document.createElement('div');
bookList.classList.add('bookList');
container.appendChild(bookList);
const formButton = document.querySelector('.formButton');
const displayButton = document.querySelector('.button');
let form = document.querySelector('.formContainer');

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {

        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }

    this.changeReadValue = function() {
        if (this.read === 'read') {
            this.read = 'unread'

            bookList.replaceChildren();
            createBookList();
        } else {
            this.read = 'read'

            bookList.replaceChildren();
            createBookList();
        }
    }

    library.push(this);
    this.indexValue = library.indexOf(this);
    console.log(library);
}

function BookFromForm(title, author, pages, read) {
    new Book(document.getElementById('title').value,
             document.getElementById('author').value,
             document.getElementById('pages').value,
             document.getElementById('read').value);
    
    bookList.replaceChildren();
    createBookList();
    document.getElementById("form").reset();
}

function removeFromLibrary(index) {

    library.splice(index, 1);
    console.log(index);
    console.log(library);
    bookList.replaceChildren();
    createBookList();
}

function createBookList () {
    bookList.replaceChildren();
    library.forEach((book) => {

        book.indexValue = library.indexOf(book);

        let bookInfo = document.createElement('div');
        bookList.appendChild(bookInfo);
        bookInfo.textContent =  book.info();

        let delButton = document.createElement('button');
        delButton.classList.add('delButton');
        bookInfo.appendChild(delButton);
        delButton.textContent = 'Delete';
        delButton.setAttribute('onclick', `removeFromLibrary(${book.indexValue})`);

        let readButton = document.createElement('button');
        readButton.classList.add('readButton');
        bookInfo.appendChild(readButton);
        readButton.textContent = `${book.read}`;
        readButton.setAttribute('onclick', `${book.title}.changeReadValue()`);
    })
};

displayButton.addEventListener('click', () => {
    
    createBookList ();
});

formButton.addEventListener('click', () => {
    
    displayForm();
});

function displayForm() {

    if (form.style.display === "flex") {
        form.style.display = "none";
        document.getElementById("form").reset();

    } else {
    form.style.display = "flex";
    }
}
let book1 = new Book('book1', 'me',  '12', 'not read')
let book2 = new Book('book2', 'alsome', '13', 'read')