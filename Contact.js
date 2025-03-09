document.addEventListener("DOMContentLoaded", function() {
  // Keep your onSubmit function as is:
  window.onSubmit = function(token) {
    document.getElementById('contact-form').submit();
  };

  // Then add the hamburger toggle logic:
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      // Toggle the .active class on nav-links
      navLinks.classList.toggle('active');
    });
  }
});
