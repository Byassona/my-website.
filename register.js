document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Останавливаем отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    // Проверяем, существует ли уже пользователь с таким именем
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUser.some(user => user.username === username);

    if (userExists) {
        alert("Пользователь с таким именем уже существует.");
    } else {
        // Добавляем нового пользователя
        const newUser = { username, password, email };
        existingUser.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUser));

        alert("Вы успешно зарегистрированы!");
        window.location.href = "login.html"; // Перенаправляем на страницу входа
    }
});
