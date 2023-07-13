// Ambil elemen-elemen yang diperlukan
const languageDropdown = document.getElementById("languageDropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const languageOptions = document.querySelectorAll(".language-option");

// Tambahkan event listener untuk toggle dropdown
languageDropdown.addEventListener("click", function () {
  dropdownContent.classList.toggle("hidden");
});

// Tambahkan event listener untuk memilih bahasa
languageOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const currentLang = languageDropdown.dataset.lang;
    const selectedLang = this.dataset.lang;
    const imgWidth = "25";

    // Toggle antara gambar Inggris dan Indonesia pada button dropdown
    if (currentLang === selectedLang) {
      if (selectedLang === "indonesia") {
        const imgSrc = "/dist/img/icon/united-kingdom.png";
        languageDropdown.innerHTML = `<img src="${imgSrc}" alt="English" width="${imgWidth}">`;
        languageDropdown.dataset.lang = "english";
      } else if (selectedLang === "english") {
        const imgSrc = "/dist/img/icon/indonesia.png";
        languageDropdown.innerHTML = `<img src="${imgSrc}" alt="Indonesia" width="${imgWidth}">`;
        languageDropdown.dataset.lang = "indonesia";
      }
    } else {
      if (selectedLang === "indonesia") {
        const imgSrc = "/dist/img/icon/indonesia.png";
        languageDropdown.innerHTML = `<img src="${imgSrc}" alt="Indonesia" width="${imgWidth}">`;
        languageDropdown.dataset.lang = "indonesia";
      } else if (selectedLang === "english") {
        const imgSrc = "/dist/img/icon/united-kingdom.png";
        languageDropdown.innerHTML = `<img src="${imgSrc}" alt="English" width="${imgWidth}">`;
        languageDropdown.dataset.lang = "english";
      }
    }

    dropdownContent.classList.add("hidden");
  });
});
