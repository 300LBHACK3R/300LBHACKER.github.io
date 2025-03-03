
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Only run this script if we're on index.html
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        // Check if the user has already seen the overlay
        if (!localStorage.getItem("ageVerified")) {
            overlay.classList.remove("hidden"); // Show overlay if not verified
        }

        // "Enter" button hides the overlay
        yesBtn.addEventListener("click", () => {
            overlay.classList.add("hidden");
            localStorage.setItem("ageVerified", "true"); // Save their choice
        });

        // "No" button gives an alert
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
