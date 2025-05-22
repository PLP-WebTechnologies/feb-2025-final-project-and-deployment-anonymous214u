// Home page: Show more text
document.getElementById('showMoreBtn')?.addEventListener('click', function () {
  const text = document.getElementById('hiddenText');
  text.style.display = text.style.display === 'none' ? 'block' : 'none';
});

// Contact form: Show message on submit
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Thanks! Message sent.';
  this.reset();
});
