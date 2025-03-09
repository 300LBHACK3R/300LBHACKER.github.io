document.addEventListener("DOMContentLoaded", function() {
  // 1) reCAPTCHA onSubmit callback remains as is
  window.onSubmit = function(token) {
    document.getElementById('contact-form').submit();
  };

  // 2) Hamburger menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      console.log("Hamburger clicked");
      navLinks.classList.toggle('active');
    });
  }
});
