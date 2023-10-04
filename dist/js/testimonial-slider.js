// Initialize Swiper
const testimonialCarousel = new Swiper("#testimonialCarousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 3000, // Waktu delay antara pergantian slide dalam milidetik (misalnya, 3 detik)
    disableOnInteraction: false, // Tetapkan ke false agar autoplay tetap berjalan ketika pengguna berinteraksi dengan carousel
  },
});

// Set initial active card as centered and others with reduced opacity and size
const testimonialCards = document.querySelectorAll(".testimonial-card");
const totalCards = testimonialCards.length;
let activeCardIndex = Math.floor(totalCards / 2);

function updateCardStyles() {
  testimonialCards.forEach((card, index) => {
    if (index === activeCardIndex) {
      card.classList.add("active-card");
    } else {
      card.classList.remove("active-card");
    }
  });
}

updateCardStyles();

testimonialCarousel.on("slideChange", function () {
  activeCardIndex = testimonialCarousel.realIndex % totalCards;
  updateCardStyles();
});
