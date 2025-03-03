
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Portfolio item clicks - Open in new tab
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
            const link = this.querySelector('a').href;
            window.open(link, '_blank');
        }
    });
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
