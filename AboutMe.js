document.addEventListener("DOMContentLoaded", function () {
    /* Smooth Scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /* Navbar Background Change on Scroll */
    const navbar = document.querySelector('.navbar');
    window.addEventListener("scroll", () => {
        navbar.style.background = window.scrollY > 50 ? "rgba(0, 0, 0, 0.9)" : "rgba(13, 17, 23, 0.9)";
    });

    /* Dynamic Hero Text */
    const heroText = document.querySelector(".hero-text-container");
    const messages = [
        "🔥 Pushing the limits of technology...",
        "💻 Crafting secure digital landscapes...",
        "🚀 Innovating for a better tomorrow...",
        "🔐 Defending the cyber world...",
    ];
    
    let index = 0;
    setInterval(() => {
        heroText.innerHTML = `<p class="hero-text">${messages[index]}</p>`;
        index = (index + 1) % messages.length;
    }, 3000);

    /* Fade-in Effect */
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    /* Mobile Navbar Toggle */
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
