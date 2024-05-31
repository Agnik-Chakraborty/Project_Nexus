// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            loginContainer.classList.toggle('show');
            signupContainer.classList.toggle('show');
        });
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        let isValid = true;

        
        document.getElementById('loginEmailError').style.display = 'none';
        document.getElementById('loginPasswordError').style.display = 'none';

        
        if (!validateEmail(email)) {
            document.getElementById('loginEmailError').textContent = 'Invalid email address';
            document.getElementById('loginEmailError').style.display = 'block';
            isValid = false;
        }

        
        if (password.length < 6) {
            document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
            document.getElementById('loginPasswordError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            
            alert('Login successful');
        }
    });

    
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        let isValid = true;

        
        document.getElementById('signupNameError').style.display = 'none';
        document.getElementById('signupEmailError').style.display = 'none';
        document.getElementById('signupPasswordError').style.display = 'none';

        
        if (name.trim() === '') {
            document.getElementById('signupNameError').textContent = 'Name is required';
            document.getElementById('signupNameError').style.display = 'block';
            isValid = false;
        }

        
        if (!validateEmail(email)) {
            document.getElementById('signupEmailError').textContent = 'Invalid email address';
            document.getElementById('signupEmailError').style.display = 'block';
            isValid = false;
        }

        
        if (password.length < 6) {
            document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters';
            document.getElementById('signupPasswordError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            
            alert('Signup successful');
        }
    });

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
