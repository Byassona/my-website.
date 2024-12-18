document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Находим пользователя по имени и паролю
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Если пользователь найден, сохраняем информацию о том, что пользователь авторизован
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // Перенаправляем на главную страницу
    } else {
        alert("Неверное имя пользователя или пароль.");
    }
});
