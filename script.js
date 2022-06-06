const bookCollection = document.querySelector('.bookCollection');

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

function Book(){

}

function addBookToLibrary(){

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

diplayBooks(myLibrary);