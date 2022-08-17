const bookAuthor = document.querySelector('#inputAuthor');
const bookTitle = document.querySelector('#inputTitle');
const bookPages = document.querySelector('#inputPages');
const bookStatus = document.querySelector('#bookStatus');
const submit = document.querySelector('.submit');
const rows = document.querySelector('tr');
const error = document.querySelector('#error');
const tbody = document.querySelector('#tbody');
const library = [];
// constructor to create book object
function Book(title, author, page, read) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
  Book.prototype.changeStatus = () => {
    for (let i = 0; i < bookStatus.length; i++) {
      const bookStatusResult = bookStatus[i].value;
      return bookStatusResult;
    }
    return true;
  };
  // loop through and display  book
  for (let i = 0; i < library.length; i += 1) {
    tbody.innerHTML = `
      <tr>
      <td> ${library[i].author}</td>
      <td> ${library[i].title}</td>
       <td> ${library[i].page}</td>
       <td> ${library[i].changeStatus()}<br><span></span></td>
       <td><button class='button'>Delete</button></td>
       </tr>`;
    // apply data index
    return tbody;
  }
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].dataset.index = i;
  }
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
};

// button to remove book from array
const deleteButton = (e) => {
  const row = e.target.parentNode.parentNode;
  const index = e.target.parentNode.dataset.index;
  row.remove();
  library.splice(index, 1);
};

const deleteRow = () => {
  const buttons = document.querySelectorAll('button');
  for (let i = 1; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', deleteButton);
  }
};

deleteRow();

submit.addEventListener('click', () => {
  addBookToLibrary();
});