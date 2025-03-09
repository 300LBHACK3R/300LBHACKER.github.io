//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    //--- Ensures We Are On index.html ---//
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        //--- Check If User Has Already Entered Before Hiding. ---//
        if (!localStorage.getItem("ageVerified")) {
            overlay.classList.remove("hidden"); //--- Show Overlay If Not Verified. ---//
        }

        //--- Hide Overlay On ENTER. ---//
        yesBtn.addEventListener("click", () => {
            overlay.classList.add("hidden");
            localStorage.setItem("ageVerified", "true"); //--- Save Their Choice. ---//
        });

        //--- Handles No Button. ---//
        noBtn.addEventListener("click", () => {
            alert("No worries—come back whenever you’re ready!");
        });
    } else {
        //--- Hides The Overlay On All Other Pages. ---//
        if (overlay) {
            overlay.classList.add("hidden");
        }
    }
});

//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
