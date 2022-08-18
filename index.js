const bookAuthor = document.querySelector('#inputAuthor');
const bookTitle = document.querySelector('#inputTitle');
const bookPages = document.querySelector('#inputPages');
const bookStatus = document.querySelector('#bookStatus');
const submit = document.querySelector('.submit');
const error = document.querySelector('#error');
const rows = document.querySelector('tr');

const library = [];
// constructor to create book object
function Book(title, author, page, read) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
  Book.prototype.changeStatus = () => {
    for (let i = 0; i < bookStatus.length; i++) {
      const bookStatusResult = bookStatus.value;
      return bookStatusResult;
    }
    return true;
  };
}
// new object stored in an array
const addBookToLibrary = () => {
  if (bookTitle.value && bookAuthor.value && bookPages.value && bookStatus.value) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    library.push(newBook);
    error.style.display = 'none';
  } else {
    error.textContent = 'please enter all information';
    error.style.display = 'block';
    error.style.color = 'red';
  }
  Book.prototype.changeStatus = () => {
    const bookStatus = document.querySelector('#bookStatus').value;
    const bookStatusResult = bookStatus;
    return bookStatusResult;
  };
};

// loop through and add book
const addBookToDom = () => {
  let result = '';
  const tbody = document.querySelector('#tbody');
  for (let i = 0; i < library.length; i += 1) {
    result += `
      <tr>
      <td> ${library[i].author}</td>
      <td> ${library[i].title}</td>
       <td> ${library[i].page}</td>
       <td> ${library[i].changeStatus()}<br><span></span></td>
       <td><button class='button'>Delete</button></td>
       </tr>`;
  }
  tbody.innerHTML = result;
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].dataset.index = i;
  }
};

const addAllBookToDom = () => {
  for (let i = 0; i < addBookToDom(); i += 1) {
    library.push(addBookToDom()[i]);
  }
};
addAllBookToDom();

// button to remove book from array
const deleteButton = (e) => {
  const row = e.target.parentNode.parentNode;
  const index = e.target.parentNode.dataset.index;
  row.remove();
  library.splice(index, 1);
};
// button to change read status
const deleteRow = () => {
  const rowTables = document.querySelectorAll('tr');
  let button = document.querySelector('#button');
  rowTables.forEach(rowTables => rowTables.addEventListener('submit', (e) => {
    e.preventDefault();
    button = e.target.id;
    if (button) {
      return deleteButton();
    }
    return false;
  }));
};

deleteRow();
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  addAllBookToDom();
});