function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function validateForm() {
    // Validate CAPTCHA
    var userInput = document.getElementById("captcha").value;
    var generatedCaptcha = document.getElementById("generatedCaptcha").textContent;

    if (userInput !== generatedCaptcha) {
        alert("CAPTCHA verification failed. Please try again.");
        return false;
    }

    // Validate password confirmation
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return false;
    }

    // Additional form validation if needed

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    var generatedCaptchaElement = document.getElementById("generatedCaptcha");
    var generatedCaptcha = generateRandomString(6); // Generate a 6-character random string
    generatedCaptchaElement.textContent = generatedCaptcha;

    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Additional actions before submission (if needed)

        alert("Logged in!");
    });
});
