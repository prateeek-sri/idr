document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }

        // Active Link on Scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Feedback
    const sendBtn = document.querySelector('.send-btn');
    const inputField = document.querySelector('.input');

    if (sendBtn && inputField) {
        sendBtn.addEventListener('click', () => {
            const value = inputField.value;
            if (value.trim() !== "") {
                alert(`Thank you for your interest! We've received your request for: ${value}`);
                inputField.value = "";
            } else {
                alert("Please enter your interest or email before sending.");
            }
        });

        // Allow pressing Enter to send
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
});
