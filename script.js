const btn = document.querySelector(".hamburger");
const showHamburger = document.querySelector(".showHamburger");
const menuLinks = document.querySelectorAll(".menu-links");
const closeBtn = document.querySelector(".close-cross");
// Card Function
const allWorks = document.querySelector(".works-main");
const firstCard = document.querySelector(".workDetails");
// Pop up modal
const modalSection = document.querySelector(".modal-section");
// Form Validation
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const textInput = document.querySelector(".text-input");
const form = document.querySelector(".contactForm");
const error = document.querySelector(".error");

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
  for (let index = 0; index < projectArr.length; index += 1) {
    firstCard.innerHTML = `
    <h3>${projectArr[index].nameCard}</h3>
    <p>${projectArr[index].descriptionGym}</p>
    <ul class="work-lang">
      <li>${projectArr[index].technology5}</li>
      <li>${projectArr[index].technology1}</li>
      <li>${projectArr[index].technology2}</li>
      <li>${projectArr[index].technology3}</li>
    </ul>
    <button class="btn" href="#/" onClick=getModal(${index})>${projectArr[index].button}</button>
    `;
  }

  // To interate the remaining cards
  for (let index = 1; index < projectArr.length; index += 1) {
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
        <button class="btn display-button" href="#" onClick=getModal(${index})>${projectArr[index].button}</button>
      </div>
    </div>
    `;
  }
};

window.addEventListener("load", cardsHTML);

// Function for pop-up modal
function getModal() {
  modalSection.style.display = "block";

  for (let index = 0; index < projectArr.length; index += 1) {
    modalSection.innerHTML = `
      <div class=" overlay">
        <div class ="cover-modal">
          <div class="heading-modal">
          <div class="heading-flex">
              <h3>${projectArr[index].nameCard} </h3>
              <a href="#">
                <i class="fas fa-times" onclick=closeModal()></i>
              </a>
              </div>
           <ul class="heading-modal-ul">
              <li >${projectArr[index].technology1}</li>
              <li>${projectArr[index].technology2}</li>
              <li>${projectArr[index].technology4}</li>
           </ul>
           <div class="modal-details">
           <img src="./images/PopUp.png" class="popup-img"alt="popup-img" />
            <div class="modal-details-textBtn">
            <p class="modal-details-paragraph">${projectArr[index].descriptionCard}</p>
            <div class="modal-details-buttons">
              <button href="#" class="modal-button" onclick=closeModal()><span>${projectArr[index].btnCard1}<i class="fas fa-file-export modal-btn"></i></span></button>
              <button href="#" class="modal-button" onclick=closeModal()><span>${projectArr[index].btnCard2}<i class="fab fa-github modal-btn"></i></span></button>
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

window.addEventListener("load", getModal);
window.addEventListener("load", closeModal);

// Form validation
const formFields = Array.from(form.elements);

function errStatus(e) {
  e.preventDefault();

  error.style.visibility = "visible";

  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  if (
    nameInput.value === "" &&
    emailInput.value === "" &&
    textInput.value === ""
  ) {
    error.textContent = "Please fill in all required fields";
    error.className = "error";
  } else if (nameInput.value === "") {
    error.textContent = "Oppsss.. Enter a valid name";
    error.className = "error";
  } else if (emailInput.value === "") {
    error.textContent = "Oppss... Enter a valid email";
    error.className = "error";
  } else if (!regex.test(emailInput.value)) {
    error.textContent = "Oppss... Email address must be in lower case";
    error.className = "error";
  } else if (textInput.value === "") {
    error.textContent = "Please enter text";
    error.className = "error";
  } else {
    error.textContent = "Thanks for contacting me...";
    error.className = "success";
    form.submit();
    nameInput.value = "";
    emailInput.value = "";
    textInput.value = "";
  }
}

function removeErrMsg() {
  error.style.visibility = "hidden";
}

formFields.forEach((input) => input.addEventListener("focus", removeErrMsg));

form.addEventListener("submit", errStatus);
