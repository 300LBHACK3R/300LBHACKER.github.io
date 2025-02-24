
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");
    const factElement = document.querySelector("#random-facts-list .fact-item");
    const nextFactButton = document.getElementById("next-fact-button");

    // 🌟 Toggle Mobile Menu (Fix: Ensure visibility toggles correctly)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Ensure visibility
            if (navLinks.classList.contains("active")) {
                navLinks.style.display = "flex";
            } else {
                navLinks.style.display = "none";
            }
        });

        // Close menu when a link is clicked (fix for mobile navigation)
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                navLinks.style.display = "none";
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

    // 🧠 Fix: Ensure First Fact Appears on Page Load
    function updateFunFact() {
        if (factElement) {
            factElement.style.opacity = 0; // Fade out effect
            setTimeout(() => {
                factElement.textContent = funFacts[currentFactIndex];
                factElement.style.opacity = 1; // Fade in effect
                currentFactIndex = (currentFactIndex + 1) % funFacts.length;
            }, 500);
        }
    }

    // 🛠 **Ensure first fun fact loads immediately**
    if (factElement) {
        factElement.textContent = funFacts[0];
        factElement.style.opacity = 1;
    }

    // 🔄 Change Fact on Button Click
    if (nextFactButton) {
        nextFactButton.addEventListener("click", updateFunFact);
    }
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
