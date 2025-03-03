
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const factElement = document.querySelector("#random-facts-list .fact-item");
    const nextFactButton = document.getElementById("next-fact-button");

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
        "More than 5 billion devices are connected to the internet worldwide!"
    ];

    let currentFactIndex = 0;

    // Load first fun fact
    if (factElement) {
        factElement.textContent = funFacts[0];
    }

    // Change Fact on Button Click
    if (nextFactButton) {
        nextFactButton.addEventListener("click", () => {
            factElement.textContent = funFacts[currentFactIndex];
            factElement.classList.add("fade-in");
            setTimeout(() => factElement.classList.remove("fade-in"), 500);
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        });
    }
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
