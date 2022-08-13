const bookForm = document.querySelector('#form');
const bookAuthor = document.querySelector('#inputAuthor');
const bookTitle = document.querySelector('#inputTitle');
const bookPages = document.querySelector('#inputPages');
const readOptions = document.querySelector('select');
const submit = document.querySelector('.submit');

const library = [];
// constructor to create book object
function Book(title, author, page, read) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.read = read;
}
// new object stored in an array
function addBookToLibrary() {
  if (bookTitle.value && bookAuthor.value && bookPages.value && readOptions.value) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readOptions.value);
    bookForm.addEventListener('submit', newBook);
    library.push(newBook);
  } else {
    alert('please enter all information');
  }
}

// loop through and display  book
function displayLibrary() {
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
}
// button to change read status
Book.prototype.changeStatus = () => {
  if (this.title === 'Read') {
    return 'Read';
  } else if (this.title === 'In Progress') {
    return 'In Progress';
  }
  return 'Not Read';
};

// button to remove book from array
function applyDataIndex() {
  const rows = document.querySelector('tr');
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].dataset.index = i;
    console.log(rows[i].dataset);
  }
}

function deleteButton(e) {
  const row = e.target.parentNode.parentNode;
  const index = e.target.parentNode.dataset.index;
  row.remove();
  library.splice(index, 1);
}
function deleteRow() {
  const buttons = document.querySelectorAll('button');
  for (let i = 1; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', deleteButton);
  }
}

submit.addEventListener('click', () => {
  displayLibrary();
  addBookToLibrary();
  applyDataIndex();
  deleteRow();
});