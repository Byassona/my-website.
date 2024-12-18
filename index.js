document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser"); // Удаляем данные о пользователе
    window.location.href = "login.html"; // Перенаправляем на страницу авторизации
});
