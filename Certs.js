
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");
    const factElement = document.querySelector("#random-facts-list .fact-item");
    const nextFactButton = document.getElementById("next-fact-button");

    // 🌟 FIX: Toggle Mobile Menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 🎨 Dark Mode Toggle
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    // 🔄 Fun Facts Array
    const funFacts = [
        "Did you know? The first computer virus was created in 1986!",
        "Cybersecurity is expected to be a $300 billion industry by 2026!",
        "The first website ever created is still online today!",
        "Alan Turing is considered the father of modern computing!",
        "Hackers attack every 39 seconds on average!",
        "More than 5 billion devices are connected to the internet worldwide!",
        "The first email ever sent was by Ray Tomlinson to himself in 1971!",
        "The term 'debugging' came from an actual bug (a moth) found in a computer!"
    ];

    let currentFactIndex = 0;

    if (factElement) {
        factElement.textContent = funFacts[0];
        factElement.style.opacity = 1;
    }

    if (nextFactButton) {
        nextFactButton.addEventListener("click", () => {
            factElement.textContent = funFacts[currentFactIndex];
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        });
    }
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
