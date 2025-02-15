
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// -- FUNCTIONALITY FOR WEBBUILD.HTML
// -- ClICKING ANYWHERE, WILL OPEN IN NEW TAB.

document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // -- PREVENTS LINK FROM OPENING TWICE.
    if(e.target.tagName !== 'A') {
      const link = this.querySelector('a').href;
      window.open(link, '_blank');
    }
  });
});


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎