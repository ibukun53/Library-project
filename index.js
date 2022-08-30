const bookAuthor = document.querySelector('#inputAuthor');
const bookTitle = document.querySelector('#inputTitle');
const bookPages = document.querySelector('#inputPages');
const bookStatus = document.querySelector('#bookStatus');
const submit = document.querySelector('#form');
let library = [];
const tbody = document.querySelector('tbody');
// constructor to create book object
function Books(title, author, page, status) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.status = status;
  this.changeStatus = () => {
    this.status = !this.status;
  };
  // using random string to generate id
  this.id = Math.random().toString(36).substr(2, 5);
}

// object stored in an array
const addBookToLibrary = () => {
  const newBook = new Books(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
  library.push(newBook);
  return newBook;
};

// single book object
const addBookToDom = (book) => {
  const tbody = document.querySelector('#tbody');
  tbody.innerHTML += `
      <tr class="dataId" data-id="${book.id}">
      <td> ${book.author}</td> 
      <td> ${book.title}</td> 
       <td> ${book.page}</td>
       <td class = "changeStatus"> ${book.status}<br><span></span></td>
       <td><button type="button" class='button' 
       data-id="${book.id}" data-action = "delete">Delete</button></td>
       </tr>`;
  // using data-id to target an id
};

// add multiple book to library
const addAllBookToDom = () => {
  for (let i = 0; i < library.length; i += 1) {
    addBookToDom(library[i]);
  }
};

const deleteBook = (event) => {
  // use data attribute to delete book from library
  if (event.target.dataset.action !== 'delete') {
    return true;
  }
  library = library.filter((ele) => ele.id !== event.target.dataset.id);
  // removing book from DOM
  const removeRow = event.target.parentElement.parentElement;
  removeRow.remove();
  return false;
};
tbody.addEventListener('click', deleteBook);
addAllBookToDom();
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBooks = addBookToLibrary();
  addBookToDom(newBooks);
},
);
