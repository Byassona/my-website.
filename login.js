document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем отправку формы

    // Простая эмуляция входа (реально использовать сервер)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Простая проверка (замените на серверную валидацию)
    if (username === "admin" && password === "1234") {
        // Сохраняем информацию о входе
        localStorage.setItem("isLoggedIn", "true");

        // Перенаправляем на главную страницу
        window.location.href = "index.html";
    } else {
        alert("Неправильные имя пользователя или пароль!");
    }
});
