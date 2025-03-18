// Toggle menu open/close
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});

// Sticky navigation on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll-to-top button
const scrollBtn = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav .menu li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    }

    menu.classList.remove('active');
  });
});

// Download CV Button (Example: Change file path to actual CV)
const downloadCVBtn = document.querySelector('.about .button button');

downloadCVBtn.addEventListener('click', () => {
  window.location.href = './path-to-your-cv-file.pdf'; // Replace with the actual file path
});




