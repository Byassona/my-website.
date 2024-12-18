// Ваш код для кнопок с эффектом наведения
const taskButtons = document.querySelectorAll(".btn");

taskButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Код для смены фото админа при наведении
const adminImage = document.getElementById("adminImage");

adminImage.addEventListener("mouseover", () => {
    document.querySelector(".admin-photo").src = "admin2.jpg"; // Изменение на второе фото
});

adminImage.addEventListener("mouseout", () => {
    document.querySelector(".admin-photo").src = "admin1.jpg"; // Возврат к первому фото
});
