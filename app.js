// add modal button functionality
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let bookList = [];

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// sidebar open and close color change
const container = document.getElementById("container");

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    container.style.marginLeft = "300px";
    document.body.style.backgroundColor = 'var(--transition)';
    document.querySelector(".top").style.backgroundColor = 'var(--darkest)';
    document.querySelector(".bottom").style.backgroundColor = 'var(--darkest)';
    card.forEach(card => {
        card.style.border = '1px solid var(--dark)';
    })
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    container.style.marginLeft = "0";
    document.body.style.backgroundColor = 'var(--lightest)'
    document.querySelector(".top").style.backgroundColor = 'var(--darker)';
    document.querySelector(".bottom").style.backgroundColor = 'var(--darker)';
    card.forEach(card => {
        card.style.border = '1px solid var(--light)';
    })
}

// stuff to create new book objects and output them as cards on HTML file

function Book(title, author, pages, isbn, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
    // this.status = status;
}

// Takes information from form and converts to an object
function createObject() {
    let a = document.getElementById('title').value;
    let b = document.getElementById('author').value;
    let c = document.getElementById('pages').value;
    let d = document.getElementById('isbn').value;

    const abc = new Book(a, b, c, d);
    bookList.push(abc);
    printBooks(a, b, c, d);
}

function printBooks(a, b, c, d) {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const isbn = document.createElement("div");

    card.classList.add("card");

    title.textContent = a;
    author.textContent = b;
    pages.textContent = c;
    isbn.textContent = d;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isbn);

    document.getElementById('cards').appendChild(card);
}

document.getElementById("myForm").addEventListener('submit', function(event) {
    createObject();

    const modal = document.getElementById('modal');
    closeModal(modal);

    event.preventDefault();
});
