// Регистрация пользователя
if (document.title === "Регистрация") {
    document.getElementById("register-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Сохраняем данные пользователя в localStorage
        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        alert("Регистрация прошла успешно!");

        // Перенаправляем на страницу авторизации
        window.location.href = "login.html";
    });
}

// Авторизация пользователя
if (document.title === "Авторизация") {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Проверяем данные из localStorage
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.username === username && user.password === password) {
            alert(`Добро пожаловать, ${user.username}!`);
            // Сохраняем информацию о входе
            localStorage.setItem("isLoggedIn", "true");
            // Перенаправляем на главную страницу
            window.location.href = "index.html";
        } else {
            alert("Неверное имя пользователя или пароль!");
        }
    });
}

// Проверка доступа на главной странице
if (document.title === "Современный сайт") {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        alert("Сначала войдите в систему.");
        window.location.href = "login.html";
    }
}

// Проверка доступа на странице отчётов
if (document.title === "Отчёты") {
    const hasPro = localStorage.getItem("proAccess");
    if (!hasPro) {
        // Если нет Pro-версии, перенаправить на страницу покупки
        alert("Доступ к отчётам доступен только с Pro-версией.");
        window.location.href = "pro.html";
    }
}

// Обработчик покупки на странице "pro.html"
if (document.title === "Купить Pro-версию") {
    document.getElementById("buy-pro").addEventListener("click", function () {
        // Имитация покупки
        localStorage.setItem("proAccess", "true");
        alert("Поздравляем! Вы приобрели Pro-версию.");
        window.location.href = "reports.html"; // Перенаправление на отчёты
    });
}
