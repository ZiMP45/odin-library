// sidebar open and close color change

const card = document.querySelectorAll(".card");
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

// toggle changes text: read/not read

let input = document.querySelectorAll('input[type=checkbox]');

function changeStatus(input) {
    let parent = input.closest('.switch');
    let text = parent.previousElementSibling;

    if (toggle.checked == true) {
        text.innerHTML = 'read';
    } else {
        text.innerHTML = 'not read';
    }
}