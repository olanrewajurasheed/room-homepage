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

// Images and dynamic through sliding
desktop_image = document.getElementById("desktop_image");
header_text = document.getElementById("header_text");

desktop_images = [
  "desktop-image-hero-1.jpg",
  "desktop-image-hero-2.jpg",
  "desktop-image-hero-3.jpg",
];

header_texts = [
  "discover innovative way to decorate",
  "we are available all across the globe",
  "Manufactured with the best materials ",
];

// functions to activate sliding of desktop_images
let i = 0;
let j = 0;
let k = 0;

function prev() {
  if (i <= 0) {
    i = desktop_images.length;
    i--;
    return setImg();
  }
}

function next() {
  if (i >= desktop_images.length - 1) {
    i = -1;
    i++;
    return setImg();
  }
}

function prev() {
  if (j <= 0) {
    j = header_texts.length;
    j--;
    return setHeader();
  }
}

function next() {
  if (j >= header_texts.length - 1) {
    j = -1;
    j++;
    return setHeader();
  }
}

overallTrigerring();

function overallTrigerring() {
  function setImg() {
    return desktop_image.setAttribute("src", "images/" + desktop_images[i]);
  }
  
  function setHeader() {
    return header_text.textContent = header_texts[i];
  }
}


