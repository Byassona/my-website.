document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (loggedInUser) {
        // Если пользователь уже авторизован, перенаправляем его на главную страницу
        window.location.href = "index.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Получаем список зарегистрированных пользователей из localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверяем, есть ли такой пользователь
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Добро пожаловать, " + username + "!");
        window.location.href = "index.html"; // Перенаправляем на главную страницу
    } else {
        alert("Неправильное имя пользователя или пароль.");
    }
});
