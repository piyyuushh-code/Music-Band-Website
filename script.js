const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }
    errorMessage.textContent = '';
    window.location.href = 'index.html';
});
