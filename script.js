// Smooth Scroll Effect for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation for Fade-In Effect on Sections
const sections = document.querySelectorAll('.section');

function handleScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Add animation when section comes into view
    if (sectionTop < windowHeight - 100) {
      section.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', handleScroll);

// Trigger the initial scroll effect in case sections are already visible
handleScroll();
