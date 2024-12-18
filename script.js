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
