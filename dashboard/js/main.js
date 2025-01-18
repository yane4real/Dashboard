// main.js

// Login form input field focus functionality
const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password match
    if (username === 'admin' && password === 'admin123') {
        // Save login status to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to index.html
        window.location.href = 'pages/index.html';
    } else {
        alert('Invalid username or password');
    }
});