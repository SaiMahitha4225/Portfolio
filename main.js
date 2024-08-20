var typed= new Typed(".text", {
    strings: ["Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            formResponse.textContent = 'Please fill out all required fields.';
            formResponse.style.color = 'red';
            return;
        }
        formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
        formResponse.style.color = 'sky blue';
        form.reset();
    });
});