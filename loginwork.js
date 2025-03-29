document.addEventListener("DOMContentLoaded", function () {
    const formInner = document.getElementById("form-inner");
    const signupButton = document.getElementById("signup-button");
    const loginButton = document.getElementById("login-button");
    const greetingText = document.getElementById("greeting-text");
    const greetingMessage = document.getElementById("greeting-message");

    signupButton.addEventListener("click", () => {
        formInner.style.transform = "translateX(-50%)";
        greetingText.innerText = "Sign Up & ";
        greetingMessage.innerText = "Start a new journey with us.";
    });

    loginButton.addEventListener("click", () => {
        formInner.style.transform = "translateX(0)";
        greetingText.innerText = "Welcome Back!";
        greetingMessage.innerText = "Please login to continue.";
    });
});

