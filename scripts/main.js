// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Send email
    emailjs.sendForm('service_tvxlo5o', 'template_mvlup2r', this)
        .then(function(response) {
            alert('Message sent successfully!');
            document.querySelector('#contact-form').reset(); // Clear form fields
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});
