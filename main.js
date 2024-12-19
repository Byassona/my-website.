document.getElementById('buy-pro').addEventListener('click', async () => {
  try {
    // Отправляем запрос на сервер для создания платёжной сессии
    const response = await fetch('/create-checkout-session', { method: 'POST' });
    const { url } = await response.json();

    // Перенаправляем пользователя на страницу оплаты
    window.location.href = url;
  } catch (error) {
    console.error('Ошибка при покупке PRO:', error);
  }
});

// Проверяем статус PRO
const isPro = localStorage.getItem('proUser') === 'true';
const proMessage = document.getElementById('pro-message');
const proSection = document.getElementById('pro-section');

if (isPro) {
  proMessage.style.display = 'block';
  proSection.style.display = 'none';
}
