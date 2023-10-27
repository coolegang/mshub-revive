document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const adminContainer = document.querySelector(".admin-container");
    const loginMessage = document.getElementById("login-message");
    const whitelistForm = document.getElementById("whitelist-form");
    const message = document.getElementById("message");

    let isLoggedIn = false; // Flag to track login status

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform actual authentication on the server here.
        // For this example, we'll use a simple username and password.
        if (username === "admin" && password === "password") {
            isLoggedIn = true;
            loginMessage.textContent = "Login successful!";
            loginForm.style.display = "none"; // Hide login form
            adminContainer.style.display = "block"; // Show admin panel
        } else {
            loginMessage.textContent = "Invalid username or password. Please try again.";
        }
    });

    whitelistForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!isLoggedIn) {
            message.textContent = "Please log in first.";
            return;
        }

        const key = document.getElementById("key").value;
        const hwid = document.getElementById("hwid").value;
        const discord = document.getElementById("discord").value;

        // Add user to the whitelist file or perform any necessary actions on the server.
        // Make sure to validate and sanitize the input and handle errors properly.
        // ...

        message.textContent = "User added to whitelist!";
    });
});
