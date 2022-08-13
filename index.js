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

Book.prototype.changeStatus = () => {
  if (this.title === 'Read') {
    return 'Read';
  } else if (this.title === 'In Progress') {
    return 'In Progress';
  }
  return 'Not Read';
};

submit.addEventListener('click', () => {
  displayLibrary();
  addBookToLibrary();
});