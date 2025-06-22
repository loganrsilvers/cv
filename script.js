document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    
    // Change hamburger icon to X when menu is open
    if (mobileMenu.classList.contains('show')) {
      menuToggle.innerHTML = '&#10005;'; // X symbol
    } else {
      menuToggle.innerHTML = '&#9776;'; // Hamburger symbol
    }
  });
  
  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuToggle.innerHTML = '&#9776;';
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#mobile-navbar')) {
      mobileMenu.classList.remove('show');
      menuToggle.innerHTML = '&#9776;';
    }
  });
});
