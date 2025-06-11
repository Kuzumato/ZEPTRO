document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout");

    logoutBtn.addEventListener("click", function () {
        window.location.href = "../login/index.html"; // Redirect to login
    });

    alert("Welcome to your upgraded dashboard!");
});
