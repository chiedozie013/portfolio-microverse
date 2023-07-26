const btn = document.querySelector(".hamburger");
const showHamburger = document.querySelector(".showHamburger");
const menuLinks = document.querySelectorAll(".menu-links");
const closeBtn = document.querySelector(".close-cross");

// function openButton() {
//   showHamburger.classList.add('show-showHamburger');
// }

// btn.addEventListener('click', openButton);

// function closeButton() {
//   showHamburger.classList.remove('show-showHamburger');
// }

closeBtn.addEventListener("click", closeButton);

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    showHamburger.classList.remove("show-showHamburger");
  })
);
