document.getElementById("alertButton").addEventListener("click", function () {
    const button = document.getElementById("alertButton");
    button.textContent = "Спасибо!";
    button.style.background = "linear-gradient(to right, #ff416c, #ff4b2b)";
    button.style.boxShadow = "0 8px 20px rgba(255, 75, 43, 0.5)";
    alert("Вы нажали на кнопку!");
});