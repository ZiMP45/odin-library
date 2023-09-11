// add modal button functionality
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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

function doSomething() {
    let a = document.getElementById('title').value;
    let b = document.getElementById('author').value;

    alert(a + ' by ' + b);
}
