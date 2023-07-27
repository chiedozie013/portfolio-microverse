const btn = document.querySelector(".hamburger");
const showHamburger = document.querySelector(".showHamburger");
const menuLinks = document.querySelectorAll(".menu-links");
const closeBtn = document.querySelector(".close-cross");
// Card Function
// const allWorks = document.querySelector(".works-main");
// const firstCard = document.querySelector(".workDetails");
// Pop up modal
const modalSection = document.querySelector(".modal-section");

function openButton() {
  showHamburger.classList.add("show-showHamburger");
}

btn.addEventListener("click", openButton);

function closeButton() {
  showHamburger.classList.remove("show-showHamburger");
}

closeBtn.addEventListener("click", closeButton);

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    showHamburger.classList.remove("show-showHamburger");
  })
);

// Pop-up window array of object
const projectArr = [
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 1,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 1,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 2,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 3,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 1,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 2,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
  {
    name: "Professional Art Printing Data",
    nameCard: "Multi Post Stories",
    number: 3,
    Description:
      "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descriptionGym:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaL",
    technology1: "html",
    technology2: "bootstrap",
    technology3: "ruby",
    technology4: "Ruby on rails",
    technology5: "css",
    button: "see project",
    btnCard1: "See Live",
    btnCard2: "See Source",
  },
];

// Function to iterate through the cards
const cardsHTML = function () {
  // First Card intration
  for (let index = 0; index < projectArr.length; index++) {
    firstCard.innerHTML = `
    <h3>${projectArr[index].nameCard}</h3>
    <p>${projectArr[index].descriptionGym}</p>
    <ul class="work-lang">
      <li>${projectArr[index].technology5}</li>
      <li>${projectArr[index].technology1}</li>
      <li>${projectArr[index].technology2}</li>
      <li>${projectArr[index].technology3}</li>
    </ul>
    <button class="btn" href="#/" onclick=getModal(${index})>${projectArr[index].button}</button>
    `;
  }

  // To interate the remaining cards
  for (let index = 1; index < projectArr.length; index++) {
    allWorks.innerHTML += `
    <div class="workCard${projectArr[index].number}">
      <div class="position">
        <div class="hide-card">
          <h2 class="card-title">${projectArr[index].name}</h2>
          <p class="card-details">${projectArr[index].Description}</p>
          <ul class="card-lang">
            <li>${projectArr[index].technology1}</li>
            <li>${projectArr[index].technology2}</li>
            <li>${projectArr[index].technology3}</li>
          </ul>
        </div>
        <button class="btn" href="#" onclick=getModal(${index})>${projectArr[index].button}</button>
      </div>
    </div>
    `;
  }
};

window.addEventListener("load", cardsHTML);

// Function for pop-up modal
function getModal() {
  modalSection.style.display = "block";

  for (let index = 0; index < projectArr.length; index++) {
    modalSection.innerHTML = `
      <div class=" overlay">
        <div class ="cover-modal">
          <div class="heading-modal">
           <h3>${projectArr[index].nameCard}</h3>
           <ul class="heading-modal-ul">
              <li >${projectArr[index].technology1}</li>
              <li>${projectArr[index].technology2}</li>
              <li>${projectArr[index].technology4}</li>
           </ul>
           <div class="modal-details">
            <div class="modal-details-textBtn">
            <p class="modal-details-paragraph">${projectArr[index].descriptionCard}</p>
            <div class="modal-details-buttons">
              <a href="#" class="modal-button" onclick=closeModal()><span>${projectArr[index].btnCard1}</span></a>
              <a href="#" class="modal-button" onclick=closeModal()><span>${projectArr[index].btnCard2}</span></a>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>`;
  }
}

const closeModal = function () {
  modalSection.style.display = "none";
};
