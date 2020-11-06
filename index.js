const section2 = document.querySelector(".section-2");
const tema = document.querySelector(".tema");
const nav = document.querySelector(".nav");
const checkBtn = document.getElementById("check");

const topOfSection2 = section2.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfSection2) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

function toggleHamburguer() {
  checkBtn.classList.add("check");
}

console.log(checkBtn);

tema.addEventListener("click", function () {
  checkBtn.classList.remove("check");
});

checkBtn.addEventListener("click", toggleHamburguer);
window.addEventListener("scroll", fixNav);
