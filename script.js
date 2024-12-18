// Получаем все кнопки оплаты и кнопки скачивания
const payBtn1 = document.getElementById("payBtn1");
const payBtn2 = document.getElementById("payBtn2");
const payBtn3 = document.getElementById("payBtn3");

const downloadBtn1 = document.getElementById("downloadBtn1");
const downloadBtn2 = document.getElementById("downloadBtn2");
const downloadBtn3 = document.getElementById("downloadBtn3");

// Функция для обработки оплаты
function handlePayment(paymentButton, downloadButton) {
    paymentButton.addEventListener("click", () => {
        // Здесь можно добавить логику обработки оплаты
        // Для примера просто показываем кнопку скачивания
        alert("Оплата успешно проведена. Теперь вы можете скачать задание.");

        // Скрываем кнопку оплаты и показываем кнопку скачивания
        paymentButton.style.display = "none";
        downloadButton.style.display = "inline-block";
    });
}

// Применяем функцию ко всем кнопкам
handlePayment(payBtn1, downloadBtn1);
handlePayment(payBtn2, downloadBtn2);
handlePayment(payBtn3, downloadBtn3);
