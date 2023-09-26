document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-button");
  const itemList = document.getElementById("itemList");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id.toLowerCase();
      buttons.forEach((btn) => {
        btn.classList.remove("active", "bg-blue-500", "shadow-lg", "shadow-blue-500/50", "rounded-lg", "text-white", "py-2", "px-4", "font-semibold");
        btn.classList.add("shadow-lg", "shadow-blue-500/50", "rounded-lg", "text-blue-500", "py-2", "px-4", "font-semibold");
      });
      button.classList.remove("shadow-lg", "shadow-blue-500/50", "rounded-lg", "text-blue-500", "py-2", "px-4", "font-semibold");
      button.classList.add("active", "bg-blue-500", "shadow-lg", "shadow-blue-500/50", "rounded-lg", "text-white", "py-2", "px-4", "font-semibold");

      if (category === "all") {
        itemList.querySelectorAll(".project-card").forEach((item) => {
          item.style.display = "block";
        });
      } else {
        itemList.querySelectorAll(".project-card").forEach((item) => {
          if (item.getAttribute("data-category") === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });
});
