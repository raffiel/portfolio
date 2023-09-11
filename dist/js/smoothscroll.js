// smooth-scroll.js

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href").substring(1); // Menghilangkan tanda "#" dari href
  const targetElement = document.getElementById(targetId);

  // Scroll ke elemen target dengan animasi smooth
  targetElement.scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Select semua tautan navigasi
  const navLinks = document.querySelectorAll("nav ul li a");

  // Tambahkan event listener untuk setiap tautan navigasi
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});
