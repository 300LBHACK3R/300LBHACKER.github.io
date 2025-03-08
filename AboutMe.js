document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  window.toggleMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  // Smooth scroll for section navigation
  window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for card animations
  const cards = document.querySelectorAll('.card');
  const observerOptions = { threshold: 0.5 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  cards.forEach(card => appearOnScroll.observe(card));
});
