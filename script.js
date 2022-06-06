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

    if (e.target.className == 'modal-outer') {
        closeModal()
    }
})

function closeModal() {
    modal.style.display = 'none';
}

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'author',
        pages: 343,
        finished: false

    },
    {
        title: 'Lord of the Rings',
        author: 'author2',
        pages: 454,
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
   }).join('')

   bookCollection.innerHTML = booksHTML;
   const bookBox = document.querySelectorAll('.book');
   console.log(myLibrary)

   for (let i = 0; i < bookBox.length; i++) {
     bookBox[i].addEventListener('click', (e) => {

        if(e.currentTarget.className === 'book' && e.target.className === 'delete'){
            e.currentTarget.remove();
            myLibrary.splice(i, 1);
        } else if(e.currentTarget.className === 'book' && e.target.className === 'unfinished' ){
            e.target.className = 'finished',
            e.target.textContent = 'Finished'
            myLibrary[i].finished = true;
        } else if(e.currentTarget.className === 'book' && e.target.className === 'finished' ) {
            e.target.className = 'unfinished',
            e.target.textContent = 'unfinished'
            myLibrary[i].finished = false;
        }
    })
    }
   
}

function deleteBook(book){
    console.log('deleting')
}



bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newbook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookFormFinished.checked);
    myLibrary.push(newbook)
    diplayBooks(myLibrary);
    closeModal()
    bookFormTitle.value = '';
    bookFormAuthor.value = ''; 
    bookFormPages.value = '';
    bookFormFinished.checked  = '';
})

diplayBooks(myLibrary);


// refactor code