document.getElementById('buy-pro').addEventListener('click', async () => {
  try {
    // Отправляем запрос на сервер для создания платёжной сессии
    const response = await fetch('/create-checkout-session', { method: 'POST' });
    const { url } = await response.json();

    // Перенаправляем пользователя на страницу оплаты
    window.location.href = url;
  } catch (error) {
    console.error('Ошибка при покупке PRO:', error);
    alert('Произошла ошибка при попытке покупки. Попробуйте позже.');
  }
});
