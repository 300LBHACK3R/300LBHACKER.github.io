document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const downloadBtn = document.querySelector(".resume-download-btn");

    // Toggle Mobile Navigation
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (for mobile)
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

        // Smooth Scrolling for Internal Links
        if (link.getAttribute("href").startsWith("#")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
    });

    // Resume Button Animation (Subtle Scale)
    if (downloadBtn) {
        downloadBtn.addEventListener("mouseenter", () => {
            downloadBtn.style.transform = "scale(1.08)";
            downloadBtn.style.transition = "transform 0.2s ease-in-out";
        });

        downloadBtn.addEventListener("mouseleave", () => {
            downloadBtn.style.transform = "scale(1)";
        });
    }
});
