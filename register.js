document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Получаем список зарегистрированных пользователей из localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверяем, есть ли уже такой пользователь
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert("Этот пользователь уже существует!");
    } else {
        // Добавляем нового пользователя
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Регистрация успешна! Теперь вы можете авторизоваться.");
        window.location.href = "login.html"; // Перенаправляем на страницу входа
    }
});
