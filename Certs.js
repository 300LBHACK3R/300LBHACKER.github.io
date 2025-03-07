
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById("theme-toggle");
  
  // Check local storage to apply dark mode on page load
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  
  // Update toggle button text based on the current mode
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  
    // Toggle dark mode on click
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
      themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  } else {
    console.warn('No element with id "theme-toggle" found.');
  }
  
  // Certificate filter event listener (unrelated to dark mode)
  const certFilter = document.getElementById("cert-filter");
  if (certFilter) {
    certFilter.addEventListener("change", function () {
      let category = this.value;
      document.querySelectorAll(".cert-card").forEach(card => {
        card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
      });
    });
  }
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
