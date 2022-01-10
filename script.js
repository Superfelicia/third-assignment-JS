const contentContainer = document.getElementById("content-container");
const menuBtn = document.getElementById("menuBtn");
const menuContainer = document.getElementById("menu-container");
const menuContent = document.getElementById("menu-content");
const menuLinks = document.getElementById("menu-links");
const menuLink = document.getElementById("menu-link");

const modal = document.getElementById("modalPop");
const modalBtn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

let toggleStatus = 0;

// make function for menu drop down when menu button is clicked
// make an event listener for onClick
// close when clicked outside of button div
// make function for a button for the modal
// make an event listener for onClick and close


// Hamburger icon

menuBtn.addEventListener("click", function () {
    if (menuLinks.classList.contains('active')) {
        menuLinks.classList.remove("active");
    } else {
        menuLinks.classList.add("active");
    }
});

window.addEventListener("click", function (e) {
    if (e.target != menuBtn) {
        menuLinks.classList.remove("active");
    }
});


// drop down menu

function menuBtnClick(){
    alert('Poop')
}


// close when clicked outside of div



// function for modal
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// when user clicks span (x), modal closes
span.onclick = function() {
    modal.style.display = "none";
}

// when user clicks anywhere outside of modal, close
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    };
}