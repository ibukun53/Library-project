const bookAuthor = document.querySelector('#inputAuthor');
const bookTitle = document.querySelector('#inputTitle');
const bookPages = document.querySelector('#inputPages');
const bookStatus = document.querySelector('#bookStatus');
const submit = document.querySelector('#submit');
const library = [];
const error = document.querySelector('#error');

// constructor to create book object
function Books(title, author, page, status) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.status = status;
  this.changeStatus = () => {
    this.status = !this.status;
  };
  this.id = Math.random().toString(36).substr(2, 5);
}

//  object stored in an array
const addBookToLibrary = () => {
  const newBook = new Books(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
  if (library.push(newBook)) {
    error.style.display = 'none';
  } else {
    error.textContent = 'please enter all information';
    error.style.display = 'block';
    error.style.color = 'red';
  }
  return newBook;
};


// a single  book
const addBookToDom = (book) => {
  const tbody = document.querySelector('#tbody');
  tbody.innerHTML += `
      <tr data-id="${book.id}" >
      <td> ${book.author}</td> 
      <td> ${book.title}</td> 
       <td> ${book.page}</td>
       <td class ="changeStatus"> ${book.status}<br><span></span></td>
       <td><button type="button" class='button'
        data-id="${book.id}" data-action = "delete">Delete</button></td>
       </tr>`;
};

const addAllBookToDom = () => {
  for (let i = 0; i < library.length; i += 1) {
    addBookToDom(library[i]);
  }
};


// button to remove book from array
const deleteButton = (e) => {
  const row = e.target.parentNode.parentNode;
  const index = e.target.parentNode.dataset.id;
  row.remove();
  library.splice(index, 1);
};
// button to change read status
const deleteRow = () => {
  const tbody = document.querySelector('tbody');
  tbody.addEventListener('click', (event) => {
    if (event.target.dataset.action === deleteButton()) {
      return deleteButton();
    }
    return false;
  });
};
deleteRow();
addAllBookToDom();
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const newBooks = addBookToLibrary();
  addBookToDom(newBooks);
},
);