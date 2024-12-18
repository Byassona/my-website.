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
        
        // Вместо перенаправления на страницу, показываем сообщение об успешном входе
        alert("Добро пожаловать, " + username + "!");
        
        // Пример добавления другого действия (например, скрытие формы и отображение информации о пользователе)
        document.getElementById("loginForm").style.display = "none"; // Прячем форму авторизации
        const loggedInMessage = document.createElement("p");
        loggedInMessage.textContent = `Вы вошли как: ${username}`;
        document.body.appendChild(loggedInMessage); // Отображаем имя пользователя на странице
    } else {
        alert("Неправильное имя пользователя или пароль.");
    }
});

const logoutButton = document.createElement("button");
logoutButton.textContent = "Выйти";
logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    alert("Вы вышли из системы.");
    location.reload(); // Перезагружаем страницу
});

document.body.appendChild(logoutButton); // Добавляем кнопку "Выйти"
