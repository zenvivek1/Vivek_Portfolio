// Scroll to a specific section smoothly
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle the contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission/reload
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset(); // Optional: clears the form after alert
    });
  }
});
