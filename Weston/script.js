// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.contact-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = '#2e7d4f';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = '#3a9c5d';
    });
  });
});
