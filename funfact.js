
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// -- RANDOM FUN FACTS GENERATOR.
document.addEventListener('DOMContentLoaded', () => {
    const randomFacts = [
        "🚀 The Longest Piece of Code Ever Written Is in a Video Game 🚀",
        "🫠The FBI Once Had to Pay Hackers to Unlock an iPhone",
        "💡 The first computer virus was 'Elk Cloner' in 1983.",
        "🔐 Python was named after Monty Python, not the snake!",
        "🚀 AI in cybersecurity can predict attacks before they happen.",
        "📜 The world's first website is still online.",
        "🤖 By 2025, 50% of software will use AI-driven code.",
        "🔎 The Y2K bug caused global fear of an internet shutdown.",
        "⚡ The first computer mouse was made of wood in 1964!",
        "🧠 Hackers first used the term 'phreaking' to exploit phone systems.",
        "🌍 The internet's first search engine was called 'Archie'.",
        "🔍 The first ever website is still accessible at CERN’s servers."
    ];

    function displayRandomFact() {
        const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        document.getElementById('random-facts-list').innerHTML = `<li class="fact-item">${randomFact}</li>`;
    }

    document.getElementById('next-fact-button').addEventListener('click', displayRandomFact);
    displayRandomFact();
});

document.addEventListener("DOMContentLoaded", () => {
    const facts = document.querySelectorAll(".fun-facts-list li");

    facts.forEach((fact, index) => {
        setTimeout(() => {
            fact.style.fontWeight = "bold";
            fact.style.opacity = "1";
            fact.style.transform = "scale(1.1)"; // Small pop effect
        }, index * 500); // Each item pops in after 0.5 seconds
    });
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎