document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверяем, существует ли уже пользователь
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert("Этот пользователь уже существует.");
    } else {
        // Добавляем нового пользователя в список
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Регистрация прошла успешно! Вы можете войти.");
        window.location.href = "login.html"; // Перенаправление на страницу входа
    }
});
