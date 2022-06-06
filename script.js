const bookCollection = document.querySelector('.bookCollection');
const modal = document.querySelector('.modal-outer');
const newBookBtn = document.querySelector('#addBook');
const bookForm = document.querySelector('#newBookFormSubmit');
const bookFormTitle = document.querySelector('.bookFormInput[name="title"]');
const bookFormAuthor = document.querySelector('.bookFormInput[name="author"]');
const bookFormPages = document.querySelector('.bookFormInput[name="pages"]');
const bookFormFinished = document.querySelector('.bookFormInput[name="finished"]');

newBookBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modal.addEventListener('click', (e) => {
    // console.log(e.target.className)
    if (e.target.className == 'modal-outer') {
        closeModal()
    }
})

function closeModal() {
    modal.style.display = 'none';
}

let myLibrary = [
    {
        title: 'bookTitle',
        author: 'author',
        pages: 300,
        finished: false

    },
    {
        title: 'bookTitle2',
        author: 'author2',
        pages: 111,
        finished: true

    },
];

function Book(title, author, pages, finished){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;

}


function diplayBooks(Library){
   const booksHTML = Library.map((book, index) => {
        return `
        <div class="book" id="${index}">
            <p class="title">${book.title}</p>
            <span class="author">${book.author}</span>
            <span class="author">|</span>
            <span class="pages">${book.pages} pages</span>
            <div class="buttons-modal">
                <button class="delete">Delete</button>
            ${book.finished
                ? `<button class="finished">Finished</button>` 
                : `<button class="unfinished">unfinished</button>`}
                
                
            </div>
        </div>
    `
   })


   bookCollection.innerHTML = booksHTML;

}



bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(bookFormTitle.value, bookFormAuthor.value )
    const newbook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookFormFinished.checked);
    myLibrary.push(newbook)
    diplayBooks(myLibrary);
    closeModal()
})

diplayBooks(myLibrary);

// remove book from list
// switch finished or not
// reset modal form