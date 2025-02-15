
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// --🌙 DARK MODE TOGGLE.
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// --🔄 FUN FACTS ARRAY.
const funFacts = [
    "Did you know? The first computer virus was created in 1986!",
    "Cybersecurity is expected to be a $300 billion industry by 2026!",
    "The first website ever created is still online today!",
    "Alan Turing is considered the father of modern computing!",
    "Hackers attack every 39 seconds on average!",
];

let currentFactIndex = 0;

// --🔄 UPDATE FUN FACT.
function updateFunFact() {
    const factElement = document.getElementById("random-facts-list").querySelector(".fact-item");
    factElement.textContent = funFacts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
}

// -- INITIALIZE FUN-FACT.
document.addEventListener("DOMContentLoaded", () => {
    updateFunFact();
    document.getElementById("next-fact-button").addEventListener("click", updateFunFact);
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎