// add modal button functionality
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const form = document.getElementById('myForm');
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

function Book(title, author, pages, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
}

// Takes information from form and converts to an object
function createObject() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isbn = document.getElementById('isbn').value;

    const abc = new Book(title, author, pages, isbn);
    bookList.push(abc);
    printBooks(title, author, pages, isbn);
}

// create card in HTML from book information input

function printBooks(a, b, c, d) {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const isbn = document.createElement("div");
    const buttonSection = document.createElement("div");
    const status = document.createElement("button");
    const remove = document.createElement("button");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isbn.classList.add("isbn");
    buttonSection.classList.add("section");
    status.classList.add("status");
    remove.classList.add("remove-btn");

    title.textContent = a;
    author.textContent = b;
    pages.textContent = c + " pages";
    isbn.textContent = d;
    remove.textContent = "remove";
    status.textContent = "read";

    buttonSection.appendChild(status);
    buttonSection.appendChild(remove);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isbn);
    card.appendChild(buttonSection);

    document.getElementById('cards').appendChild(card);
}

// close modal after submit and prevent page refresh which deletes cards

document.getElementById("myForm").addEventListener('submit', function(event) {
    createObject();

    const modal = document.getElementById('modal');
    closeModal(modal);

    event.preventDefault();
    form.reset();
});