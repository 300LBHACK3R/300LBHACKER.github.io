//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 ------//

//--- Mobile Menu Toggle. ---//
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

//--- Smooth Scroll. ---///
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
          });

//--- Portfolio Item Clicks. ---//
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
            const link = this.querySelector('a').href;
            window.open(link, '_blank');
        }
    });
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 -------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 -------//
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎 -------//
