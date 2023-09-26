// Navbar Dixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  }
};
// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Simpan nama dari input "name"
  const name = document.getElementById("name").value.trim();

  // Tampilkan SweetAlert success
  Swal.fire(`Message Sent!`, `Thanks <strong>${name}</strong>. Your message has been successfully sent and I will respond shortly.`, "success");

  // Setelah SweetAlert ditampilkan, reset formulir
  form.reset();
});

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameValidation = document.querySelector("#name-validation");
const emailValidation = document.querySelector("#email-validation");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

function validateName() {
  const nameValue = nameInput.value.trim();

  if (nameValue !== "") {
    nameValidation.textContent = "✓";
  } else {
    nameValidation.textContent = "";
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue !== "" && emailRegex.test(emailValue)) {
    emailValidation.textContent = "✓";
  } else {
    emailValidation.textContent = "";
  }
}

function resetValidation() {
  nameValidation.textContent = "";
  emailValidation.textContent = "";
}

// Bar banner

// Hide the banner bar after 4 seconds
setTimeout(function () {
  document.querySelector(".flex").style.display = "none";
  document.querySelector("header").classList.remove("pt-16");
}, 3200);

// Add click event listener to the close button
document.getElementById("close-button").addEventListener("click", function () {
  document.querySelector(".flex").style.display = "none";
  document.querySelector("header").classList.remove("pt-16");
});
