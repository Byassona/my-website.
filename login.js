document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (loggedInUser) {
        // Если пользователь уже авторизован, перенаправляем его на главную страницу
        window.location.href = "index.html";
    }
});
