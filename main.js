document.getElementById('buy-pro').addEventListener('click', async () => {
  try {
    const response = await fetch('/create-checkout-session', { method: 'POST' });
    const { url } = await response.json();

    // Перенаправляем на страницу оплаты
    window.location.href = url;
  } catch (error) {
    console.error('Ошибка при покупке PRO:', error);
  }
});

// Проверяем, куплен ли PRO
const isPro = localStorage.getItem('proUser') === 'true';
const proMessage = document.getElementById('pro-message');

if (isPro) {
  proMessage.style.display = 'block';
}
