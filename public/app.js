// navbar initialisation

hamburger = document.getElementById("hamburger");
navbar = document.getElementById("mobile_navbar");
close_navbar = document.getElementById("close_navbar");
// event listeners
eventlisteners();

function eventlisteners() {
  hamburger.addEventListener("click", navbarToggling);
  close_navbar.addEventListener("click", closeNavBarOne);

  window.addEventListener("resize", closeNavBarTwo);
}

//
function navbarToggling() {
  navbar.style.display = "flex";
}

function closeNavBarOne() {
  navbar.style.display = "none";
}

function closeNavBarTwo() {
  if (window.innerWidth >= 768) {
    navbar.style.display = "none";
  }
}
