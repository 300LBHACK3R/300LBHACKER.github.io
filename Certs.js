
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");

    // 🌟 Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // 🎨 Dark Mode Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // 🔄 Fun Facts Rotation (Smooth Transition)
    const funFacts = [
        "Did you know? The first computer virus was created in 1986!",
        "Cybersecurity is expected to be a $300 billion industry by 2026!",
        "The first website ever created is still online today!",
        "Alan Turing is considered the father of modern computing!",
        "Hackers attack every 39 seconds on average!"
    ];

    let currentFactIndex = 0;
    const factElement = document.getElementById("random-facts-list").querySelector(".fact-item");

    function updateFunFact() {
        factElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            factElement.textContent = funFacts[currentFactIndex];
            factElement.style.opacity = 1; // Fade in
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        }, 500);
    }

    document.getElementById("next-fact-button").addEventListener("click", updateFunFact);

    // 🏆 Expand Certificates on Click (Mobile-Friendly)
    document.querySelectorAll(".cert-card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });

    // Initialize Fun Fact
    updateFunFact();
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
