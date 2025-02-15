//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// -- SMOOTH SCROLL.
/**
 * ENABLES SMOOTH SCROLLING INTERNALLY.
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

// -- VALIDATION FOR CONTACT FORM. 
/**
 * ENSURES ALL FIELDS ARE FILLED IN.
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

// -- RESUME DOWNLOAD/CONFETTI EFFECT.
/**
 * HANDLES DOWNLOAD BUTTON WITH ANIMATION.
 */
function handleResumeDownload() {
    const downloadButton = document.querySelector(".resume-download-btn");
    if (!downloadButton) return;

    downloadButton.addEventListener("click", (event) => {
        event.preventDefault();

        // -- LAUNCH CONFETTI.
        launchConfetti();

        // -- SHOW ALERT MESSAGE.
        showAlert("📂 Your resume download will begin shortly!", "info");

        // -- RESUME DOWNLOAD.
        setTimeout(() => {
            window.location.href = downloadButton.getAttribute("href");
        }, 1500);
    });
}

/**
 * CREATES ADN LAUNCHES CONFETTI ANIMATION.
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
 * GENERATES RANDOM COLOR FOR CONFETTI.
 */
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// -- STICKY HEADER EFFECT ON SCROLL. 
/**
 * ADDS A SHADOW EFFECT TO THE HEADER WHILE SCROLLING.
 */
function stickyHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

// -- GLOBAL ALERT FUNCTION.
/**
 * Displays a user-friendly alert message.
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

// -- INITIALIZE ALL FUNCTIONS WHEN DOCUMENT IS READY.
/**
 * INITIALIZES WEBSITE FUNCTIONALITY. 
 */
function initializeWebsite() {
    enableSmoothScroll();
    validateContactForm();
    handleResumeDownload();
    stickyHeader();
}

// -- CALLS INITIALIZATION, WHEN PAGE IS LOADED.
document.addEventListener("DOMContentLoaded", initializeWebsite);

// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity 😎
// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity😎
// 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity 😎