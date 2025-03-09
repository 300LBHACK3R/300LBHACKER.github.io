//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById("theme-toggle");
  
  //---- Apply Dark Mode From Local Storage On Page Load. ----//
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  
  //---- Set Toggle Button Text Based On The Current Mode. ----//
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 The DARK SIDE";
  
    //---- Toggle Dark Mode On Click. ----//
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
      themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 The DARK SIDE";
    });
  } else {
    console.warn('No element with id "theme-toggle" found.');
  }
  
  //---- Certificate Filter Event Listener. ----//
  const certFilter = document.getElementById("cert-filter");
  if (certFilter) {
    certFilter.addEventListener("change", function () {
      let category = this.value;
      document.querySelectorAll(".cert-card").forEach(card => {
        card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
      });
    });
  }

  //---- Mobile Nav Toggle For The Menu. ----//
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
