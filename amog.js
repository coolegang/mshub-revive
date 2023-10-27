document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // In a real system, you would send the username and password to the server for verification.
        // For this example, we'll just check if the username and password are correct.
        
        if (username === "secret_rob_account_no_login_pls_1243242354_gdjhj" && password === "sfjsdbhfuhzninijnjifnwsfeiojnk") {
            message.textContent = "Login successful!";
        } else {
            message.textContent = "Invalid username or password. Please try again.";
        }
    });
});
