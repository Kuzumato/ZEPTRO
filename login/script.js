document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Set predefined credentials
        const validUsername = "admin";
        const validPassword = "12345";

        if (username === validUsername && password === validPassword) {
            window.location.href = "..dashboard.html"; // Redirect to dashboard (same folder)
        } else {
            alert("Invalid username or password. Try again.");
        }
    });
});

