// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusts the offset for fixed nav
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (email === '') {
        alert('Please enter your email.');
        isValid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (message === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset(); // Clears the form
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Highlight Active Section in Navbar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});
