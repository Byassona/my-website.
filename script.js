// Проверка авторизации
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Если пользователь не авторизован, перенаправляем на страницу авторизации
    if (!isLoggedIn) {
        window.location.href = "login.html";
    }
});
