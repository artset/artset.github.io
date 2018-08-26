// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("create");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var curates = document.getElementById("curate");

function openCurate() {
  curates.style.marginLeft = "0px";
  curates.style.opacity = 1;
}

function closeCurate() {
  curates.style.marginLeft = "-450px";
  curates.style.opacity = 0;
}
