//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// -- Smooth Scroll.
/**
 * Enables Smooth Scroll Internally. 
 */
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// -- Validattion For Contact Form. 
/**
 * Ensures All Fields Are Filled In.
 */
function validateContactForm() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            showAlert("⚠️ Please fill in all fields.", "error");
        } else {
            showAlert("✅ Message sent successfully!", "success");
        }
    });
}

// -- Resume Download/Confetti.
/**
 * Handles Download Button With Animation.
 */
function handleResumeDownload() {
    const downloadButton = document.querySelector(".resume-download-btn");
    if (!downloadButton) return;

    downloadButton.addEventListener("click", (event) => {
        event.preventDefault();

        // -- Launch Confetti.
        launchConfetti();

        // -- Show Alert Messsage.
        showAlert("📂 Your resume download will begin shortly!", "info");

        // -- Resume Download.
        setTimeout(() => {
            window.location.href = downloadButton.getAttribute("href");
        }, 1500);
    });
}

/**
 * Creates And Launches Confetti.
 */
function launchConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 50; i--; ) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 4000);
}

/**
 * Generates Random Colour For Confetti.
 */
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// -- Sticky Header Effect on Scroll. 
/**
 * Adds A Shadow To Header While Scrolling.
 */
function stickyHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

// -- Global Alert Function.
/**
 * Displays A User Friendly Alert Message.
 */
function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert-box", type);
    alertBox.innerHTML = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("fade-out");
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);
}

// -- Init All Functions Ater Doc Is Ready.
/**
 * Initiliazes Website Funcationality. 
 */
function initializeWebsite() {
    enableSmoothScroll();
    validateContactForm();
    handleResumeDownload();
    stickyHeader();
}

// -- Calls Initialize When Pagwe Is Loaded. 
document.addEventListener("DOMContentLoaded", initializeWebsite);

 <script>
        // -- Toggle Mobile Navigation.
        document.querySelector(".menu-toggle").addEventListener("click", function () {
            document.querySelector(".nav-links").classList.toggle("active");
        });
    </script>

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity 😎
// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity😎
// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity 😎
