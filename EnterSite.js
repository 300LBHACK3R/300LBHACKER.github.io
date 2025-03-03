
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Ensure we are on index.html
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        // Check if user has already entered before hiding
        if (!localStorage.getItem("ageVerified")) {
            overlay.classList.remove("hidden"); // Show overlay if not verified
        }

        // Hide overlay on "ENTER" click
        yesBtn.addEventListener("click", () => {
            overlay.classList.add("hidden");
            localStorage.setItem("ageVerified", "true"); // Save their choice
        });

        // Handle "No" button
        noBtn.addEventListener("click", () => {
            alert("No worries—come back whenever you’re ready!");
        });
    } else {
        // Hide the overlay on all other pages
        if (overlay) {
            overlay.classList.add("hidden");
        }
    }
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
