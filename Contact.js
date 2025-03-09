document.addEventListener("DOMContentLoaded", function() {
  // reCAPTCHA onSubmit callback remains as is:
  window.onSubmit = function(token) {
    document.getElementById('contact-form').submit();
  };

  // Hamburger menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});
