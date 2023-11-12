const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const form = document.getElementById('myForm');
const container = document.getElementById("container");


// for selecting book to input into library and for removal
let index = 0;

// Modal open and close functionality

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

// book class

class Book {
    constructor(title, author, pages, isbn, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isbn = isbn;
        this.index = index;    
    }
}

// close modal after submit and prevent page refresh which deletes cards

document.getElementById("myForm").addEventListener('submit', function(event) {
    createObject();

    const modal = document.getElementById('modal');
    closeModal(modal);

    event.preventDefault();
    form.reset();
});

// Takes information from form and converts to an object
function createObject() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isbn = document.getElementById('isbn').value;

    const abc = new Book(title, author, pages, isbn, index);

    // push to library
    abc.addToLibrary(abc);

    // create card div and assign all attributes for CSS

    printBooks(title, author, pages, isbn, index);
    index++;
}

// create card in HTML from book information input
function printBooks(a, b, c, d, e) {
    const card = document.createElement("div"), title = document.createElement("div"), 
          author = document.createElement("div"), pages = document.createElement("div"), 
          isbn = document.createElement("div"), buttonSection = document.createElement("div"), 
          status = document.createElement("button"), remove = document.createElement("button");

    card.classList.add("card");
    card.setAttribute('id', e);
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isbn.classList.add("isbn");
    buttonSection.classList.add("section");
    status.classList.add("status");
    status.setAttribute('id', '1');
    status.setAttribute('value', 'OFF');
    status.setAttribute('onclick', 'toggle(this)');
    remove.classList.add("remove-btn");
    remove.setAttribute('onclick', 'removeStuff(this);');

    title.textContent = a;
    author.textContent = b;
    pages.textContent = c + " pages";
    isbn.textContent = d;
    remove.textContent = "remove";
    status.textContent = "not read";

    buttonSection.append(status, remove);

    card.append(title, author, pages, isbn, buttonSection);

    document.getElementById('cards').appendChild(card);
}

// toggle read/not read status on card
function toggle(button) {
    if(button.value == "OFF") {
        button.value="ON";
        button.style.backgroundColor = "green";
        button.textContent = "read";
    } else {
        button.value="OFF";
        button.style.backgroundColor = "red";
        button.textContent = "not read";
    }
    
}

// helper function to remove stuff
function removeStuff(a) {
    removeFromLibrary(a);
    removeCard(a);
}

// remove book from library
function removeFromLibrary(a) {
    let num = a.parentNode.parentNode.id;
    let counter = 0;

    library.forEach((element) => {
        if (element.index == num) {
            library.splice(counter, 1);
            console.log(library);
        }
        counter++;
    })
}

// remove card from main-content area on button click
function removeCard (a) {
    a.parentNode.parentNode.remove();
}
