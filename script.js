const hamburger = document.querySelector(".hamburger");
const navDesktop = document.querySelector(".navDesktop");

hamburger.addEventListener("click", () => {
  navDesktop.classList.toggle("show-navDesktop");
});
