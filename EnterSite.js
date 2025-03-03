
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Check if the user already entered
    if (localStorage.getItem("ageVerified") === "true") {
        overlay.classList.add("hidden"); // Hide overlay if already verified
    } else {
        overlay.classList.remove("hidden"); // Ensure overlay is visible
    }

    // On clicking "Enter"
    yesBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        localStorage.setItem("ageVerified", "true");
    });

    // On clicking "No"
    noBtn.addEventListener("click", () => {
        alert("No worries—come back whenever you’re ready!");
    });
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
